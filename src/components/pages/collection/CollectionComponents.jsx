import React, { useEffect } from "react";
import CollectionBanner from "../collection/CollectionBanner";
import ExploreCollections from "../collection/ExploreCollections";
import Rings from "../collection/Rings";
import BespokeWatches from "../collection/BespokeWatches";
import BespokeStraps from "../collection/BespokeStraps";
import ArtSlider from "../home/ArtSlider";

const CollectionComponents = () => {
  useEffect(() => {
    const scrollToSection = () => {
      const sectionId = window.location.hash.substring(1);

      if (!sectionId) return;

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToSection);
    });
  }, []);

  return (
    <div>
      <CollectionBanner />
      <ExploreCollections />

      <Rings id="rings" />
      <BespokeWatches id="watches" />
      <BespokeStraps id="straps" />

      <ArtSlider />
    </div>
  );
};

export default CollectionComponents;