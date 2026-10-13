import React from 'react'
import AboutBanner from './components/AboutBanner'
import Aboutus from './components/Aboutus'
import Whychooseus from '../home/components/Whychooseus'
import Faq from '../faq/components/Faq'
import Cta from '../home/components/Cta'

const AboutComponents = () => {
  return (
    <div>
      <AboutBanner/>
      <Aboutus/>
      <Whychooseus/>
      <Faq/>
      <Cta/>
    </div>
  )
}

export default AboutComponents