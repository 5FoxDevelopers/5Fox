import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ServicesSection } from "@/components/services-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section" 

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <SkillsSection />
      <TeamSection /> 
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
