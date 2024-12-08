import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { LogoTicker } from '@/sections/LogoTicker'
import { Pricing } from '@/sections/Pricing'
import { ProductShowcase } from '@/sections/ProductShowcase'
import React from 'react'

const page = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <LogoTicker/>
   <ProductShowcase/>
   <Pricing/>
   </>
  )
}

export default page
