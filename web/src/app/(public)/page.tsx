'use client'

import Introduction from '@/components/_Home/Introduction'
import ServicesPresentation from '@/components/_Home/ServicesPresentation'
import About from '@/components/_Home/About'
import Work from '@/components/_Home/Work'
import News from '@/components/_Home/News'

export default function Home() {
  return (
    <>
      <Introduction />

      <About />

      <ServicesPresentation />

      <Work />

      <News />
    </>
  )
}
