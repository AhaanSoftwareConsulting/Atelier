import React from 'react'
import AboutBanner from '../about/AboutBanner'
import Bench from '../about/Bench'
import WorkHappens from '../about/WorkHappens'
import Purpose from '../about/Purpose'
import ArtSlider from '../home/ArtSlider'

const AboutComponents = () => {
  return (
    <div>
      <AboutBanner/>
      <Bench/>
      <WorkHappens/>
      <Purpose/>
      <ArtSlider/>
    </div>
  )
}

export default AboutComponents