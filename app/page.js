import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import MaintenancePlans from '@/components/MaintenancePlans'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <MaintenancePlans />
      <Contact />
    </main>
  )
}