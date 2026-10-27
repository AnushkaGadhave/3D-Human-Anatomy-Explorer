import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, BookOpen, RotateCcw, Box, Sparkles } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import './HeroSection.css'

// Lightweight interactive 3D anatomy preview mesh
function InteractiveAnatomyModel() {
  return (
    <group position={[0, -0.2, 0]}>
      {/* Torso Silhouette */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.7, 1.4, 16, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.35}
          wireframe={false}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          roughness={0.25}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Internal Organs with interactive highlights */}
      {/* Brain */}
      <mesh position={[0, 1.3, 0.05]}>
        <sphereGeometry args={[0.26, 24, 24]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#581c87"
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Lungs */}
      <group position={[0, 0.35, 0.08]}>
        <mesh position={[-0.24, 0, 0]}>
          <capsuleGeometry args={[0.18, 0.45, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0369a1"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[0.24, 0, 0]}>
          <capsuleGeometry args={[0.18, 0.45, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0369a1"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Heart */}
      <mesh position={[0.06, 0.28, 0.22]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshStandardMaterial
          color="#f43f5e"
          emissive="#e11d48"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Digestive System core */}
      <mesh position={[0, -0.35, 0.1]}>
        <torusGeometry args={[0.22, 0.1, 16, 24]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#c2410c"
          emissiveIntensity={0.3}
          roughness={0.4}
        />
      </mesh>
    </group>
  )
}

export default function HeroSection() {
  const [is3DMode, setIs3DMode] = useState(false)
  const visualRef = useRef(null)

  // Smooth scroll handler
  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const elem = document.querySelector(targetId)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Interactive mouse tilt effect on the anatomical visual
  const handleMouseMove = (e) => {
    if (is3DMode || !visualRef.current) return
    const rect = visualRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    visualRef.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
  }

  const handleMouseLeave = () => {
    if (!visualRef.current) return
    visualRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <section id="home" className="hero-section">
      {/* Background Soft Gradients */}
      <div className="hero-bg-glow hero-glow-left" />
      <div className="hero-bg-glow hero-glow-right" />

      <div className="container hero-container">
        {/* Left Column: Heading, Subtitle & Action Buttons */}
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="badge-text">Learn &bull; Explore &bull; Discover</span>
          </div>

          <h1 className="hero-heading">
            Explore the <br />
            <span className="text-highlight-blue">Human</span>{' '}
            <span className="text-highlight-gradient">Body</span>{' '}
            <span className="text-navy">in 3D</span>
          </h1>

          <p className="hero-description">
            Dive into the fascinating world of human anatomy with our interactive 3D model.
            Explore organs, learn about body systems, and test your knowledge &mdash; all in one place!
          </p>

          <div className="hero-cta-group">
            <Link
              to="/dashboard"
              className="btn-primary-gradient"
            >
              <span className="btn-icon-wrapper">
                <Play size={13} fill="currentColor" />
              </span>
              <span>Explore Anatomy</span>
              <ArrowRight size={16} className="btn-arrow" />
            </Link>

            <a
              href="#features"
              className="btn-secondary-white"
              onClick={(e) => handleScrollTo(e, '#features')}
            >
              <BookOpen size={17} className="btn-secondary-icon" />
              <span>Learn More</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Focal Point (Clean Human Anatomy Figure) */}
        <div id="explore" className="hero-visual-wrapper">
          {/* Decorative layered backdrop shapes */}
          <div className="backdrop-blob-cyan" />
          <div className="backdrop-blob-blue" />
          <div className="backdrop-blob-purple" />

          {/* 3D Mode Toggle Button */}
          <div className="view-mode-switch">
            <button
              type="button"
              className={`mode-toggle-btn ${!is3DMode ? 'active' : ''}`}
              onClick={() => setIs3DMode(false)}
            >
              <Sparkles size={14} />
              <span>Realistic Art</span>
            </button>
            <button
              type="button"
              className={`mode-toggle-btn ${is3DMode ? 'active' : ''}`}
              onClick={() => setIs3DMode(true)}
            >
              <Box size={14} />
              <span>Live 3D Orbit</span>
            </button>
          </div>

          {/* Main Display Area */}
          <div
            ref={visualRef}
            className="anatomy-stage"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {is3DMode ? (
              <div className="three-canvas-container">
                <Canvas camera={{ position: [0, 0, 3.6], fov: 45 }}>
                  <ambientLight intensity={0.9} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} />
                  <pointLight position={[-5, -2, 2]} intensity={0.6} color="#38bdf8" />
                  <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                    <InteractiveAnatomyModel />
                  </Float>
                  <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    minDistance={2.2}
                    maxDistance={5.5}
                    maxPolarAngle={Math.PI / 1.7}
                    minPolarAngle={Math.PI / 3.5}
                  />
                </Canvas>
                <div className="canvas-instruction">
                  <RotateCcw size={13} />
                  <span>Drag with mouse to rotate in 3D</span>
                </div>
              </div>
            ) : (
              <div className="static-anatomy-figure-container">
                <img
                  src="/images/hero_anatomy_figure.png"
                  alt="Realistic 3D Human Anatomy Figure showing brain, lungs, heart, liver, stomach, and vascular system"
                  className="hero-anatomy-image"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
