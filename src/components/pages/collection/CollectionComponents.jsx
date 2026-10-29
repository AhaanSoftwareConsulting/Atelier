import React from 'react'
import CollectionBanner from "../collection/CollectionBanner";
import ExploreCollections from '../collection/ExploreCollections';
import ArtSlider from '../home/ArtSlider';

const CollectionComponents = () => {
  return (
    <div>
      <CollectionBanner/>
      <ExploreCollections/>
      <ArtSlider/>
    </div>
  )
}

export default CollectionComponents