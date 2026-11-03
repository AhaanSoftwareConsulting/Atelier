import React, { useEffect } from "react";
import CollectionBanner from "../collection/CollectionBanner";
import ExploreCollections from "../collection/ExploreCollections";
import Rings from "../collection/Rings";
import BespokeWatches from "../collection/BespokeWatches";
import BespokeStraps from "../collection/BespokeStraps";
import ArtSlider from "../home/ArtSlider";

const CollectionComponents = () => {
  useEffect(() => {
  const scrollToHash = () => {
    const sectionId = window.location.hash.substring(1);

    if (!sectionId) return;

    const section = document.getElementById(sectionId);

    if (section) {
      const headerOffset = 100;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  const timer = setTimeout(scrollToHash, 300);

  return () => clearTimeout(timer);
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