import React from 'react'
import HomeBanner from "../home/HomeBanner";
import Objects from "../home/Objects";
import Discover from "../home/Discover";
import HomeBanner  from "../home/HomeBanner";
import ArtSlider from './ArtSlider';

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <Objects/>
      <Discover/>
      <ArtSlider/>
    </div>
  )
}

export default HomeComponents