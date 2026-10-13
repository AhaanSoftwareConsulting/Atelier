import React from 'react'
import HomeBanner from './components/HomeBanner'
import WhatWeOffer from './components/WhatWeOffer';
import Whychooseus from './components/Whychooseus'
import Made from './components/Made'
import Faq from '../faq/Faq'
import Cta from './components/Cta'

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <WhatWeOffer/>
      <Whychooseus/>
      <Made/>
      <Faq/>
      <Cta/>
      
    </div>
  )
}

export default HomeComponents