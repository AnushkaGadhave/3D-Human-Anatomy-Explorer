import { Link } from 'react-router-dom'
import {
  Box,
  Layers,
  BookOpen,
  HelpCircle,
  Sparkles,
  Cpu,
  CheckCircle2
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import './AboutPage.css'

export default function AboutPage() {
  const steps = [
    {
      num: '01',
      title: 'Select',
      desc: 'Pick an organ or body system from the organized catalog, dashboard, or quick search.',
      icon: Layers,
      color: '#0284c7'
    },
    {
      num: '02',
      title: 'Explore',
      desc: 'Interact with high-fidelity 3D meshes using 360° orbital rotation, smooth zoom, and mesh toggles.',
      icon: Box,
      color: '#9333ea'
    },
    {
      num: '03',
      title: 'Learn',
      desc: 'Digest concise, student-friendly biological summaries, dimensions, and physiological facts.',
      icon: BookOpen,
      color: '#10b981'
    },
    {
      num: '04',
      title: 'Test',
      desc: 'Solidify your anatomical knowledge through instant-feedback interactive quizzes.',
      icon: HelpCircle,
      color: '#f43f5e'
    }
  ]

  const techStack = [
    { name: 'React 18', role: 'Component Architecture & State Engine', tag: 'Core' },
    { name: 'Three.js', role: 'WebGL 3D Rendering & Scene Graph API', tag: 'Graphics' },
    { name: '@react-three/fiber', role: 'Declarative Three.js Canvas in React', tag: 'Graphics' },
    { name: '@react-three/drei', role: 'GLTF Loading, OrbitControls & Lighting', tag: 'Graphics' },
    { name: 'Vite', role: 'High-Speed Next-Gen Frontend Tooling', tag: 'Bundler' },
    { name: 'Vanilla CSS', role: 'Custom Design System & Responsive Tokens', tag: 'Styling' },
    { name: 'Lucide React', role: 'Clean, Semantic Vector Interface Icons', tag: 'UI Icons' }
  ]

  return (
    <div className="about-page">
      <div className="about-page-inner container">
        {/* Header */}
        <PageHeader
          badge="Project Overview & Architecture"
          title="About 3D Human Anatomy Explorer"
          subtitle="An interactive Computer Graphics project designed to make human anatomy education engaging, visual, and intuitive through real-time 3D WebGL rendering."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
        />

        {/* Project Mission & Vision */}
        <div className="about-mission-grid">
          <div className="mission-card">
            <div className="mission-badge">
              <Sparkles size={18} />
              <span>Educational Mission</span>
            </div>
            <h2 className="mission-title">Why 3D Interactive Visualization Matters</h2>
            <p className="mission-text">
              Traditional 2D textbook diagrams often struggle to convey the complex spatial relationships, depth, and three-dimensional arrangements of human internal organs.
            </p>
            <p className="mission-text">
              By harnessing WebGL hardware acceleration in modern browsers, this project allows students to rotate, inspect, and isolate anatomical layers in real time—bridging the gap between conceptual medical diagrams and real spatial anatomy.
            </p>
          </div>

          <div className="features-highlight-card">
            <h3 className="features-card-title">Key Architectural Highlights</h3>
            <ul className="features-list">
              <li className="feature-item">
                <CheckCircle2 size={16} className="feature-check" />
                <div>
                  <strong>Real-Time 3D Mesh Inspection:</strong> Smooth orbital controls, layer isolation (head, organs, skeleton), wireframe mode, and mesh picking.
                </div>
              </li>
              <li className="feature-item">
                <CheckCircle2 size={16} className="feature-check" />
                <div>
                  <strong>Curated Multi-System Catalog:</strong> Comprehensive data covering Nervous, Circulatory, Respiratory, Digestive, Skeletal, Muscular, and Urinary systems.
                </div>
              </li>
              <li className="feature-item">
                <CheckCircle2 size={16} className="feature-check" />
                <div>
                  <strong>Local-First & Zero Friction:</strong> 100% client-side application running offline without database logins, external tracking, or API keys.
                </div>
              </li>
              <li className="feature-item">
                <CheckCircle2 size={16} className="feature-check" />
                <div>
                  <strong>Interactive Learning Hub & Quizzes:</strong> Instant-scoring quizzes with in-depth scientific explanations.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Flow: Select -> Explore -> Learn -> Test */}
        <div className="how-it-works-section">
          <div className="section-head-center">
            <span className="section-tag">Learning Methodology</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              A structured four-step educational journey from initial discovery to active recall.
            </p>
          </div>

          <div className="steps-cards-grid">
            {steps.map((st) => {
              const StepIcon = st.icon
              return (
                <div key={st.num} className="step-flow-card">
                  <div className="step-top-row">
                    <span className="step-number" style={{ color: st.color }}>
                      {st.num}
                    </span>
                    <div className="step-icon-circle" style={{ backgroundColor: `${st.color}15`, color: st.color }}>
                      <StepIcon size={20} />
                    </div>
                  </div>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="tech-stack-card">
          <div className="tech-card-header">
            <Cpu size={24} className="tech-header-icon" />
            <div>
              <h3 className="tech-header-title">Computer Graphics & Web Tech Stack</h3>
              <p className="tech-header-sub">Built with modern standard web graphics libraries and frameworks.</p>
            </div>
          </div>

          <div className="tech-items-grid">
            {techStack.map((tech) => (
              <div key={tech.name} className="tech-item-row">
                <div className="tech-name-col">
                  <span className="tech-badge">{tech.tag}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
                <span className="tech-role">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="about-cta-banner">
          <div className="cta-banner-text">
            <h3>Ready to Explore Human Anatomy?</h3>
            <p>Launch the 3D Viewer or browse through the comprehensive organ catalog.</p>
          </div>
          <div className="cta-banner-buttons">
            <Link to="/dashboard" className="btn-cta-primary">
              <Box size={16} />
              <span>Launch 3D Dashboard</span>
            </Link>
            <Link to="/organs" className="btn-cta-secondary">
              <Layers size={16} />
              <span>Browse Catalog</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
