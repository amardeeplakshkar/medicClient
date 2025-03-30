import React from 'react'
import { Hero } from './ui/animated-hero'
import Navbar from './Navbar'
import { Features } from './ui/features'
import { HowItWorks } from './ui/howitworks'
import { Testimonials } from './ui/testimonials'
import { Footer } from './ui/footer'
import { ImageCarousel } from './ui/image-carousel'

const Landing = () => {
  return (
    <>
    <Navbar/>
    <div className="block">
      <Hero />
      <ImageCarousel/>
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <Footer/>
    </div>
    </>
  )
}

export default Landing