import React from 'react'
import HomeBanner from './components/HomeBanner'
import WhatWeOffer from './components/WhatWeOffer';
import Whychooseus from './components/Whychooseus'
import Made from './components/Made'
import Faq from '../faq/components/Faq'
import Cta from './components/Cta'
import OurStory from './components/OurStory'

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <WhatWeOffer/>
      <OurStory/>
      <Whychooseus/>
      <Made/>
      <Faq/>
      <Cta/>
      
    </div>
  )
}

export default HomeComponents