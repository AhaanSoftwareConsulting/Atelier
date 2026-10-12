import React from 'react'
import HomeBanner from './components/HomeBanner'
import Made from './components/Made'
import Faq from '../faq/Faq'
import Cta from './components/Cta'


const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <Made/>
      <Faq/>
      <Cta/>
    </div>
  )
}

export default HomeComponents