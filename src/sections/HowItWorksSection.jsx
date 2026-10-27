import { Eye, Box, BookOpen, ChevronRight } from 'lucide-react'
import { HOW_IT_WORKS_STEPS } from '../data/anatomyData'
import './HowItWorksSection.css'

// Custom Step Icon
function StepIcon({ type, color }) {
  if (type === 'eye') {
    return <Eye size={22} color={color} strokeWidth={2.4} />
  }
  if (type === 'box') {
    return <Box size={22} color={color} strokeWidth={2.4} />
  }
  if (type === 'book') {
    return <BookOpen size={22} color={color} strokeWidth={2.4} />
  }
  if (type === 'brain') {
    return (
      <svg className="step-svg-icon" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5c0 .3.05.6.14.88A4 4 0 0 0 4 10c0 1.25.57 2.37 1.46 3.12A4 4 0 0 0 6 18.5a4 4 0 0 0 3.5 2 3.5 3.5 0 0 0 2.5-1" />
        <path d="M14.5 2a3.5 3.5 0 0 1 3.5 3.5c0 .3-.05.6-.14.88A4 4 0 0 1 20 10c0 1.25-.57 2.37-1.46 3.12A4 4 0 0 1 18 18.5a4 4 0 0 1-3.5 2 3.5 3.5 0 0 1-2.5-1" />
        <path d="M12 4v16" />
      </svg>
    )
  }
  return null
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      {/* Decorative background curves */}
      <div className="hiw-curve-top" />
      <div className="hiw-curve-bottom" />

      <div className="container hiw-container">
        {/* Left Side: Stepper Progress */}
        <div className="hiw-left">
          <span className="hiw-eyebrow">SIMPLE STEPS</span>
          <h2 className="hiw-heading">How It Works</h2>
          <p className="hiw-desc">
            Get started in just a few clicks and begin your anatomy journey!
          </p>

          <div className="stepper-horizontal">
            {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
              <div key={stepItem.step} className="stepper-unit">
                <div className="stepper-node">
                  {/* Step Number Circle */}
                  <div
                    className="step-number-circle"
                    style={{ backgroundColor: stepItem.color }}
                  >
                    <span>{stepItem.step}</span>
                  </div>

                  {/* Step Icon Squircle */}
                  <div
                    className="step-icon-squircle"
                    style={{ backgroundColor: stepItem.bg }}
                  >
                    <StepIcon type={stepItem.iconType} color={stepItem.color} />
                  </div>

                  <h3 className="step-title">{stepItem.title}</h3>
                  <p className="step-desc">{stepItem.description}</p>
                </div>

                {/* Connecting Chevron between steps */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="step-connector">
                    <ChevronRight size={18} color="#94a3b8" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Speech Bubble Card & Anatomical Heart */}
        <div className="hiw-right">
          {/* Speech bubble */}
          <div className="hiw-speech-bubble">
            <p className="bubble-text">
              Your journey<br />to better understanding<br />starts here!
            </p>
            <svg
              className="bubble-tail-svg"
              viewBox="0 0 40 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2C15 22 30 18 36 6"
                stroke="#1e3a8a"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Realistic 3D Heart Illustration */}
          <div className="hiw-heart-wrapper">
            <img
              src="/images/how_it_works_heart.png"
              alt="Detailed anatomical heart illustration"
              className="hiw-heart-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
