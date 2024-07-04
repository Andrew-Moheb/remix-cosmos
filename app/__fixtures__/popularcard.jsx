import React from "react";
import MostPopularCard from "../components/MostPopularCard";
import { categoryCardData } from "../data/data";

function popularcard() {
  return (
    <div>
      <MostPopularCard card={categoryCardData} />
    </div>
  );
}

export default popularcard;
