import ScrollUp from '@/components/marketing/ScrollToTop/ScrollUp'
import AboutSection from '@/sections/About/AboutSection'
import Solutions from '@/sections/About/Solutions'
import Blog from '@/sections/Blog'
import Brands from '@/sections/Brands'
import Contact from '@/sections/Contact'
import Features from '@/sections/Features'
import Hero from '@/sections/Hero'
import Pricing from '@/sections/Pricing'
import Testimonials from '@/sections/Testimonials'
import Video from '@/sections/Video'
import React from 'react'

const HomePage = () => {
  return (
    <>
        <ScrollUp />
        <Hero />
        <Features />
        <AboutSection />
        <Solutions />
        <Pricing />
        <Brands />
        <Video />
        <Testimonials />
        <Blog />
        <Contact />
    </>
  )
}

export default HomePage