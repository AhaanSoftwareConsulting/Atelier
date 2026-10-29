import React from 'react'
import HomeBanner from "../home/HomeBanner";
import Objects from "../home/Objects";
import Discover from "../home/Discover";
import ArtSlider from './ArtSlider';
import OurStory from './OurStory';
import FeaturedProducts from './FeaturedProducts';

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <Objects/>
      <OurStory/>
      <FeaturedProducts/>
      <Discover/>
      <ArtSlider/>
    </div>
  )
}

export default HomeComponents