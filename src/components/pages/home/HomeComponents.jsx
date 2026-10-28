import React from 'react'
import HomeBanner from "../home/HomeBanner";
import Objects from "../home/Objects";
import Discover from "../home/Discover";
import HomeBanner  from "../home/HomeBanner";
import ArtSlider from './ArtSlider';
import OurStory from './OurStory';

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <Objects/>
      <Discover/>
      <ArtSlider/>
      <OurStory/>
    </div>
  )
}

export default HomeComponents