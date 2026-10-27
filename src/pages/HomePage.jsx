import HeroSection from '../sections/HeroSection'
import FeatureCardsSection from '../sections/FeatureCardsSection'
import BodySystemsSection from '../sections/BodySystemsSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import AboutSection from '../sections/AboutSection'

export default function HomePage() {
  return (
    <div className="home-page-container">
      <HeroSection />
      <FeatureCardsSection />
      <BodySystemsSection />
      <HowItWorksSection />
      <AboutSection />
    </div>
  )
}
