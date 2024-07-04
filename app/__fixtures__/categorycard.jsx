import React from "react";
import CategoryCard from "../components/CategoryCard";
import { categoryCardData } from "../data/data";

function categorycard() {
  return (
    <div>
      <CategoryCard card={categoryCardData} />
    </div>
  );
}

export default categorycard;
