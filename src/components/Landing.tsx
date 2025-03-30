import React from 'react'
import { Hero } from './ui/animated-hero'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <>
    <Navbar/>
    <div className="block">
      <Hero />
    </div>
    </>
  )
}

export default Landing