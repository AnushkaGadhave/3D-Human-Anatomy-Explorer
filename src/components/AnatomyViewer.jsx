import { Suspense, useState, useRef, useEffect, Component } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Float, Html } from '@react-three/drei'
import * as THREE from 'three'
import {
  RotateCcw,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  Layers,
  Sparkles,
  Info,
  RefreshCw,
  AlertCircle,
  Eye,
  EyeOff,
  ZoomIn,
  ZoomOut,
  Compass
} from 'lucide-react'
import { getAnatomyPartByMeshName } from '../data/anatomyRegistry'
import './AnatomyViewer.css'

// Default anatomical layers
const AVAILABLE_LAYERS = [
  { id: 'Muscles', label: 'Muscular', color: '#f43f5e', count: '455 meshes' },
  { id: 'Skeleton', label: 'Skeletal', color: '#0d9488', count: '232 meshes' },
  { id: 'Internal_Organs', label: 'Internal Organs', color: '#ea580c', count: '27 meshes' },
  { id: 'Joints', label: 'Joints', color: '#8b5cf6', count: '103 meshes' },
  { id: 'Tendons', label: 'Tendons', color: '#0284c7', count: '11 meshes' },
  { id: 'Ligaments', label: 'Ligaments', color: '#eab308', count: '238 meshes' }
]

const DEFAULT_LAYERS_STATE = {
  Muscles: true,
  Skeleton: true,
  Internal_Organs: true,
  Joints: false,
  Tendons: false,
  Ligaments: false
}

// Error Boundary for WebGL & GLTF loader
class GLTFErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('AnatomyViewer GLTF load error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="viewer-error-overlay">
          <AlertCircle size={36} className="error-icon" />
          <h3>Unable to load 3D Anatomy Model</h3>
          <p>{this.state.error?.message || 'WebGL hardware acceleration or context error.'}</p>
          <div className="error-actions">
            <button
              type="button"
              className="btn-viewer-retry"
              onClick={() => {
                this.setState({ hasError: false, error: null })
                this.props.onRetry?.()
              }}
            >
              <RefreshCw size={14} />
              <span>Retry Load</span>
            </button>
            <button
              type="button"
              className="btn-viewer-fallback"
              onClick={this.props.onFallback}
            >
              <Sparkles size={14} />
              <span>Use Procedural 3D Fallback</span>
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

// Camera Animator for smooth transitions to preset views: Front, Back, Left, Right
function CameraController({ cameraTargetPos, cameraLookAt, onAnimationComplete }) {
  const { camera } = useThree()
  const isAnimating = useRef(false)

  useEffect(() => {
    if (cameraTargetPos) {
      isAnimating.current = true
    }
  }, [cameraTargetPos])

  useFrame((_, delta) => {
    if (!isAnimating.current || !cameraTargetPos) return

    const speed = 1 - Math.exp(-6 * delta)
    camera.position.lerp(cameraTargetPos, speed)

    if (cameraLookAt) {
      camera.lookAt(cameraLookAt)
    }

    if (camera.position.distanceTo(cameraTargetPos) < 0.05) {
      camera.position.copy(cameraTargetPos)
      isAnimating.current = false
      onAnimationComplete?.()
    }
  })

  return null
}

// Actual GLB Model loaded via Drei useGLTF
function GLBAnatomyModel({
  visibleLayers,
  selectedPart,
  hoveredMeshName,
  onHoverMesh,
  onSelectMesh,
  wireframe
}) {
  const { scene } = useGLTF('/models/revora-anatomy.glb')
  const meshesRef = useRef([])

  // Clone materials on load so highlighting doesn't tint shared materials
  useEffect(() => {
    const list = []
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.material = obj.material.clone()
        obj.userData.baseEmissive = obj.material.emissive ? obj.material.emissive.clone() : new THREE.Color(0)
        obj.userData.baseIntensity = obj.material.emissiveIntensity ?? 0
        obj.userData.baseColor = obj.material.color ? obj.material.color.clone() : new THREE.Color(0xffffff)
        list.push(obj)
      }
    })
    meshesRef.current = list
  }, [scene])

  // Update wireframe mode
  useEffect(() => {
    meshesRef.current.forEach((m) => {
      if (m.material) {
        m.material.wireframe = wireframe
      }
    })
  }, [wireframe])

  // Update visibility based on layers
  useEffect(() => {
    meshesRef.current.forEach((m) => {
      let layer = m.userData?.layer
      if (!layer) {
        const name = (m.parent?.name || m.name || '').toLowerCase()
        if (name.includes('muscle')) layer = 'Muscles'
        else if (name.includes('skeleton') || name.includes('bone')) layer = 'Skeleton'
        else if (
          name.includes('organ') ||
          name.includes('heart') ||
          name.includes('lung') ||
          name.includes('liver') ||
          name.includes('stomach') ||
          name.includes('colon') ||
          name.includes('kidney') ||
          name.includes('trachea') ||
          name.includes('bladder') ||
          name.includes('pancreas') ||
          name.includes('gallbladder')
        )
          layer = 'Internal_Organs'
        else if (name.includes('joint')) layer = 'Joints'
        else if (name.includes('tendon')) layer = 'Tendons'
        else if (name.includes('ligament')) layer = 'Ligaments'
      }

      if (layer && visibleLayers[layer] !== undefined) {
        m.visible = !!visibleLayers[layer]
      }
    })
  }, [visibleLayers])

  // Update emissive highlights for selection & hover
  useEffect(() => {
    const selectColor = new THREE.Color('#38bdf8') // vibrant cyan glow
    const hoverColor = new THREE.Color('#f43f5e') // soft coral hover

    meshesRef.current.forEach((m) => {
      const mat = m.material
      if (!mat || !mat.emissive) return

      let isSelected = false
      if (selectedPart) {
        // Match either by meshPatterns or direct name match
        const mName = m.name.toLowerCase()
        const parentName = (m.parent?.name || '').toLowerCase()

        if (selectedPart.meshPatterns) {
          isSelected = selectedPart.meshPatterns.some(
            (pat) => mName.includes(pat.toLowerCase()) || parentName.includes(pat.toLowerCase())
          )
        }
        if (!isSelected) {
          isSelected =
            mName.includes(selectedPart.id.toLowerCase()) ||
            mName.includes(selectedPart.name.toLowerCase().replace(/\s+/g, '_'))
        }
      }

      const isHovered = hoveredMeshName && m.name === hoveredMeshName

      if (isSelected) {
        mat.emissive.copy(selectColor)
        mat.emissiveIntensity = 0.85
      } else if (isHovered) {
        mat.emissive.copy(hoverColor)
        mat.emissiveIntensity = 0.5
      } else {
        mat.emissive.copy(m.userData.baseEmissive || new THREE.Color(0))
        mat.emissiveIntensity = m.userData.baseIntensity || 0
      }
    })
  }, [selectedPart, hoveredMeshName])

  return (
    <primitive
      object={scene}
      position={[0, -0.85, 0]}
      scale={[1, 1, 1]}
      onPointerOver={(e) => {
        e.stopPropagation()
        if (e.object?.isMesh) {
          onHoverMesh(e.object.name)
          document.body.style.cursor = 'pointer'
        }
      }}
      onPointerOut={() => {
        onHoverMesh(null)
        document.body.style.cursor = 'auto'
      }}
      onClick={(e) => {
        e.stopPropagation()
        if (e.delta > 5) return // was drag rotation
        if (e.object?.isMesh) {
          onSelectMesh(e.object.name, e.object)
        }
      }}
    />
  )
}

// Procedural 3D Fallback Mesh
function ProceduralAnatomyModel({ visibleLayers, wireframe, selectedPart }) {
  const isSelected = (id) => selectedPart && selectedPart.id === id

  return (
    <group position={[0, -0.4, 0]}>
      {/* Torso Capsule */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.7, 1.4, 16, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          roughness={0.2}
          transparent
          opacity={0.35}
          wireframe={wireframe}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          roughness={0.3}
          transparent
          opacity={0.4}
          wireframe={wireframe}
        />
      </mesh>

      {/* Brain */}
      <mesh
        position={[0, 1.3, 0.05]}
        scale={isSelected('brain') ? [1.25, 1.25, 1.25] : [1, 1, 1]}
      >
        <sphereGeometry args={[0.26, 24, 24]} />
        <meshStandardMaterial
          color={isSelected('brain') ? '#f43f5e' : '#a855f7'}
          emissive={isSelected('brain') ? '#e11d48' : '#6b21a8'}
          emissiveIntensity={0.6}
          wireframe={wireframe}
        />
      </mesh>

      {/* Lungs */}
      {visibleLayers.Internal_Organs && (
        <group position={[0, 0.35, 0.08]} scale={isSelected('lungs') ? [1.2, 1.2, 1.2] : [1, 1, 1]}>
          <mesh position={[-0.24, 0, 0]}>
            <capsuleGeometry args={[0.18, 0.45, 16, 16]} />
            <meshStandardMaterial
              color="#0284c7"
              emissive={isSelected('lungs') ? '#38bdf8' : '#0369a1'}
              emissiveIntensity={isSelected('lungs') ? 0.9 : 0.4}
              wireframe={wireframe}
            />
          </mesh>
          <mesh position={[0.24, 0, 0]}>
            <capsuleGeometry args={[0.18, 0.45, 16, 16]} />
            <meshStandardMaterial
              color="#0284c7"
              emissive={isSelected('lungs') ? '#38bdf8' : '#0369a1'}
              emissiveIntensity={isSelected('lungs') ? 0.9 : 0.4}
              wireframe={wireframe}
            />
          </mesh>
        </group>
      )}

      {/* Heart */}
      {visibleLayers.Internal_Organs && (
        <mesh
          position={[0.06, 0.28, 0.22]}
          scale={isSelected('heart') ? [1.3, 1.3, 1.3] : [1, 1, 1]}
        >
          <sphereGeometry args={[0.15, 24, 24]} />
          <meshStandardMaterial
            color="#f43f5e"
            emissive={isSelected('heart') ? '#38bdf8' : '#be123c'}
            emissiveIntensity={isSelected('heart') ? 0.9 : 0.7}
            wireframe={wireframe}
          />
        </mesh>
      )}

      {/* Spine / Skeleton */}
      {visibleLayers.Skeleton && (
        <mesh position={[0, 0.1, -0.2]}>
          <cylinderGeometry args={[0.06, 0.06, 1.5, 16]} />
          <meshStandardMaterial
            color="#0d9488"
            emissive="#115e59"
            emissiveIntensity={0.5}
            wireframe={wireframe}
          />
        </mesh>
      )}

      {/* Liver */}
      {visibleLayers.Internal_Organs && (
        <mesh
          position={[-0.14, -0.05, 0.18]}
          scale={isSelected('liver') ? [1.25, 1.25, 1.25] : [1, 1, 1]}
        >
          <capsuleGeometry args={[0.16, 0.32, 16, 16]} />
          <meshStandardMaterial
            color="#ea580c"
            emissive={isSelected('liver') ? '#38bdf8' : '#c2410c'}
            emissiveIntensity={isSelected('liver') ? 0.9 : 0.5}
            wireframe={wireframe}
          />
        </mesh>
      )}

      {/* Stomach */}
      {visibleLayers.Internal_Organs && (
        <mesh
          position={[0.14, -0.05, 0.16]}
          scale={isSelected('stomach') ? [1.25, 1.25, 1.25] : [1, 1, 1]}
        >
          <sphereGeometry args={[0.18, 20, 20]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive={isSelected('stomach') ? '#38bdf8' : '#d97706'}
            emissiveIntensity={isSelected('stomach') ? 0.9 : 0.5}
            wireframe={wireframe}
          />
        </mesh>
      )}
    </group>
  )
}

export default function AnatomyViewer({
  selectedPart = null,
  onSelectPart,
  initialLayerTarget = null
}) {
  const [useFallback, setUseFallback] = useState(false)
  const [visibleLayers, setVisibleLayers] = useState(DEFAULT_LAYERS_STATE)
  const [hoveredMeshName, setHoveredMeshName] = useState(null)
  const [autoRotate, setAutoRotate] = useState(false)
  const [wireframe, setWireframe] = useState(false)
  const [showLayersDrawer, setShowLayersDrawer] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activePresetView, setActivePresetView] = useState('Front')
  const [cameraTargetPos, setCameraTargetPos] = useState(null)
  const [cameraLookAt, setCameraLookAt] = useState(null)
  const [retryKey, setRetryKey] = useState(0)

  const containerRef = useRef(null)
  const controlsRef = useRef(null)

  // Layer sync from props
  useEffect(() => {
    if (initialLayerTarget) {
      setVisibleLayers((prev) => ({ ...prev, [initialLayerTarget]: true }))
    }
  }, [initialLayerTarget])

  // Preset Views: Front, Back, Left, Right
  const handlePresetView = (viewName) => {
    setActivePresetView(viewName)
    const target = new THREE.Vector3(0, 0.25, 0)
    setCameraLookAt(target)

    if (controlsRef.current) {
      controlsRef.current.target.copy(target)
    }

    switch (viewName) {
      case 'Front':
        setCameraTargetPos(new THREE.Vector3(0, 0.45, 2.7))
        break
      case 'Back':
        setCameraTargetPos(new THREE.Vector3(0, 0.45, -2.7))
        break
      case 'Left':
        setCameraTargetPos(new THREE.Vector3(-2.7, 0.45, 0))
        break
      case 'Right':
        setCameraTargetPos(new THREE.Vector3(2.7, 0.45, 0))
        break
      default:
        setCameraTargetPos(new THREE.Vector3(0, 0.45, 2.7))
    }
  }

  // Reset Camera View
  const handleResetCamera = () => {
    setActivePresetView('Front')
    handlePresetView('Front')
  }

  // Zoom In & Zoom Out
  const handleZoom = (factor) => {
    if (!controlsRef.current) return
    const camera = controlsRef.current.object
    const target = controlsRef.current.target
    const offset = camera.position.clone().sub(target)
    offset.multiplyScalar(factor)
    const newPos = target.clone().add(offset)

    // Clamp distance between 0.6 and 6.5
    if (newPos.distanceTo(target) >= 0.6 && newPos.distanceTo(target) <= 6.5) {
      setCameraTargetPos(newPos)
    }
  }

  // Toggle Layer visibility
  const toggleLayer = (layerId) => {
    setVisibleLayers((prev) => ({ ...prev, [layerId]: !prev[layerId] }))
  }

  // Handle Mesh Selection from 3D canvas
  const handleMeshClicked = (meshName, meshObj) => {
    // 1. Look up in registered anatomy database
    const registeredPart = getAnatomyPartByMeshName(meshName)

    if (registeredPart) {
      onSelectPart?.(registeredPart)
      return
    }

    // 2. Dynamic anatomy part fallback using node metadata
    const displayName =
      meshObj?.userData?.displayName ||
      meshName.replace(/Left_/g, 'Left ').replace(/Right_/g, 'Right ').replace(/_/g, ' ')
    const layer = meshObj?.userData?.layer || 'Muscles'
    const region = meshObj?.userData?.region || 'General'

    const dynamicPart = {
      id: meshName.toLowerCase().replace(/_/g, '-'),
      name: displayName,
      alternativeNames: [meshName],
      system:
        layer === 'Internal_Organs'
          ? 'Visceral'
          : layer === 'Skeleton'
          ? 'Skeletal'
          : layer === 'Muscles'
          ? 'Muscular'
          : 'Locomotor',
      category:
        layer === 'Skeleton' ? 'Bone' : layer === 'Internal_Organs' ? 'Organ' : 'Muscle',
      location: `${region.replace(/_/g, ' ')} anatomical region`,
      description: `Specific anatomical structure (${displayName}) identified within the ${layer.replace(
        /_/g,
        ' '
      )} layer.`,
      functions: [
        `Contributes to the structural and physiological integrity of the ${region.replace(/_/g, ' ')}.`,
        `Interacts with neighboring tissues in the ${layer.replace(/_/g, ' ')} system.`
      ],
      structureDetails: `Identified 3D mesh node with Terminologia Anatomica nomenclature: ${meshName}.`,
      relatedParts: [],
      clinicalRelevance: `Documented anatomical structure subject to musculoskeletal assessment or physiological study.`,
      meshPatterns: [meshName],
      image:
        layer === 'Skeleton'
          ? '/images/body-systems/skeletal.png'
          : layer === 'Internal_Organs'
          ? '/images/body-systems/digestive.png'
          : '/images/body-systems/muscular.png',
      color: layer === 'Skeleton' ? '#0d9488' : layer === 'Internal_Organs' ? '#ea580c' : '#f43f5e',
      bg: '#f8fafc'
    }

    onSelectPart?.(dynamicPart)
  }

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {})
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {})
    }
  }

  return (
    <div
      ref={containerRef}
      className={`anatomy-viewer-root ${isFullscreen ? 'fullscreen' : ''}`}
    >
      {/* Top HUD: Info Bar & Preset Angle Controls */}
      <div className="viewer-top-hud">
        <div className="hud-status">
          <span className="hud-status-dot"></span>
          <span className="hud-title">Interactive 3D Anatomy Model</span>
          <span className="hud-mesh-count">
            {useFallback ? 'Procedural Fallback' : '1,066 Clickable Meshes'}
          </span>
        </div>

        {/* Preset Viewing Angles: Front, Back, Left, Right */}
        <div className="hud-preset-views" role="group" aria-label="Viewing Angles">
          <div className="preset-view-label">
            <Compass size={13} />
            <span>View:</span>
          </div>
          {['Front', 'Back', 'Left', 'Right'].map((view) => (
            <button
              key={view}
              type="button"
              className={`preset-angle-btn ${activePresetView === view ? 'active' : ''}`}
              onClick={() => handlePresetView(view)}
              title={`Rotate model to ${view} view`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas Stage */}
      <div className="viewer-canvas-stage">
        <GLTFErrorBoundary
          key={`model-${retryKey}`}
          onRetry={() => {
            setUseFallback(false)
            setRetryKey((k) => k + 1)
          }}
          onFallback={() => setUseFallback(true)}
        >
          <Canvas
            camera={{ position: [0, 0.45, 2.7], fov: 36 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          >
            <ambientLight intensity={0.9} />
            <directionalLight position={[4, 6, 5]} intensity={1.3} />
            <directionalLight position={[-4, 2, -4]} intensity={0.7} color="#38bdf8" />
            <pointLight position={[0, -2, 2]} intensity={0.5} color="#818cf8" />

            <Suspense
              fallback={
                <Html center>
                  <div className="viewer-loading-box">
                    <div className="viewer-spinner"></div>
                    <p className="loading-text">Loading 3D Human Anatomy...</p>
                    <span className="loading-sub">Preparing 1,066 anatomical meshes</span>
                  </div>
                </Html>
              }
            >
              {useFallback ? (
                <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
                  <ProceduralAnatomyModel
                    visibleLayers={visibleLayers}
                    wireframe={wireframe}
                    selectedPart={selectedPart}
                  />
                </Float>
              ) : (
                <GLBAnatomyModel
                  visibleLayers={visibleLayers}
                  selectedPart={selectedPart}
                  hoveredMeshName={hoveredMeshName}
                  onHoverMesh={setHoveredMeshName}
                  onSelectMesh={handleMeshClicked}
                  wireframe={wireframe}
                />
              )}
            </Suspense>

            <OrbitControls
              ref={controlsRef}
              makeDefault
              autoRotate={autoRotate}
              autoRotateSpeed={1.5}
              enableDamping
              dampingFactor={0.08}
              minDistance={0.6}
              maxDistance={6.5}
              minPolarAngle={Math.PI * 0.05}
              maxPolarAngle={Math.PI * 0.95}
              target={[0, 0.25, 0]}
              touches={{
                ONE: THREE.TOUCH.ROTATE,
                TWO: THREE.TOUCH.DOLLY_PAN
              }}
            />

            <CameraController
              cameraTargetPos={cameraTargetPos}
              cameraLookAt={cameraLookAt}
              onAnimationComplete={() => setCameraTargetPos(null)}
            />
          </Canvas>
        </GLTFErrorBoundary>

        {/* Selected Structure floating badge if any */}
        {selectedPart && (
          <div className="selected-structure-hud">
            <div className="structure-info">
              <span className="structure-tag">Active Selection</span>
              <h4 className="structure-name">{selectedPart.name}</h4>
            </div>
            <button
              type="button"
              className="btn-clear-selection"
              onClick={() => onSelectPart?.(null)}
              title="Deselect and return to full anatomy view"
              aria-label="Deselect part"
            >
              &times;
            </button>
          </div>
        )}

        {/* Hover structure tooltip */}
        {hoveredMeshName && !selectedPart && (
          <div className="hover-structure-pill">
            <Info size={13} />
            <span>
              {hoveredMeshName
                .replace(/Left_/g, 'Left ')
                .replace(/Right_/g, 'Right ')
                .replace(/_/g, ' ')}
            </span>
          </div>
        )}
      </div>

      {/* Floating Toolbar Controls */}
      <div className="viewer-toolbar">
        <button
          type="button"
          className="toolbar-btn"
          onClick={handleResetCamera}
          title="Reset Front View"
          aria-label="Reset View"
        >
          <RotateCcw size={16} />
        </button>

        <button
          type="button"
          className="toolbar-btn"
          onClick={() => handleZoom(0.8)}
          title="Zoom In"
          aria-label="Zoom In"
        >
          <ZoomIn size={16} />
        </button>

        <button
          type="button"
          className="toolbar-btn"
          onClick={() => handleZoom(1.25)}
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <ZoomOut size={16} />
        </button>

        <button
          type="button"
          className={`toolbar-btn ${autoRotate ? 'active' : ''}`}
          onClick={() => setAutoRotate(!autoRotate)}
          title={autoRotate ? 'Pause 360° Rotation' : 'Auto 360° Rotate'}
          aria-label="Toggle Auto Rotation"
        >
          {autoRotate ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button
          type="button"
          className={`toolbar-btn ${wireframe ? 'active' : ''}`}
          onClick={() => setWireframe(!wireframe)}
          title="Toggle Wireframe Grid"
          aria-label="Toggle Wireframe"
        >
          <Sparkles size={16} />
        </button>

        <button
          type="button"
          className={`toolbar-btn ${showLayersDrawer ? 'active' : ''}`}
          onClick={() => setShowLayersDrawer(!showLayersDrawer)}
          title="Anatomical Layers"
          aria-label="Anatomical Layers"
        >
          <Layers size={16} />
        </button>

        <button
          type="button"
          className="toolbar-btn"
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      {/* Layers Drawer Panel */}
      {showLayersDrawer && (
        <div className="viewer-layers-drawer">
          <div className="layers-drawer-header">
            <h4>Anatomical Layers</h4>
            <button
              type="button"
              className="close-drawer-btn"
              onClick={() => setShowLayersDrawer(false)}
            >
              &times;
            </button>
          </div>
          <div className="layers-drawer-list">
            {AVAILABLE_LAYERS.map((layer) => {
              const isVisible = visibleLayers[layer.id]
              return (
                <div
                  key={layer.id}
                  className={`layer-item ${isVisible ? 'layer-on' : 'layer-off'}`}
                  onClick={() => toggleLayer(layer.id)}
                >
                  <span
                    className="layer-indicator-dot"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div className="layer-item-info">
                    <span className="layer-item-label">{layer.label}</span>
                    <span className="layer-item-count">{layer.count}</span>
                  </div>
                  <button
                    type="button"
                    className="layer-visibility-btn"
                    aria-label={`Toggle ${layer.label} visibility`}
                  >
                    {isVisible ? <Eye size={15} /> : <EyeOff size={15} />}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
