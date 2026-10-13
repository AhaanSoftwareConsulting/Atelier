import React from 'react'
import ServiceBanner from './components/ServiceBanner'
import WhatWeOffer from '../home/components/WhatWeOffer'
import Whychooseus from '../home/components/Whychooseus'
import Faq from '../faq/Faq'
import Cta from '../home/components/Cta'

const ServiceComponents = () => {
  return (
    <div>
      <ServiceBanner/>
      <WhatWeOffer/>
      <Whychooseus/>
      <Faq/>
      <Cta/>
    </div>
  )
}

export default ServiceComponents