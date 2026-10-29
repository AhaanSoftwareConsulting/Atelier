import React from 'react'
import CollectionBanner from "../collection/CollectionBanner";
import ExploreCollections from '../collection/ExploreCollections';
import Rings from '../collection/Rings';
import BespokeWatches from '../collection/BespokeWatches';
import BespokeStraps from '../collection/BespokeStraps';
import ArtSlider from '../home/ArtSlider';

const CollectionComponents = () => {
  return (
    <div>
      <CollectionBanner/>
      <ExploreCollections/>
      <Rings/>
      <BespokeWatches/>
      <BespokeStraps/>
      <ArtSlider/>
    </div>
  )
}

export default CollectionComponents