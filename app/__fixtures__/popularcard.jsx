import React from "react";
import MostPopularCard from "../components/MostPopularCard";
import { popularCardData } from "../data/data";

function popularcard() {
  return (
    <div>
      <MostPopularCard card={popularCardData} />
    </div>
  );
}

export default popularcard;
