import React from 'react'
import HomeBanner from './components/HomeBanner'
import WhatWeOffer from './components/WhatWeOffer';
import Made from './components/Made'
import Faq from '../faq/Faq'
import Cta from './components/Cta'

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <WhatWeOffer/>
      <Made/>
      <Faq/>
      <Cta/>
      
    </div>
  )
}

export default HomeComponents