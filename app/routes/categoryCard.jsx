import CategoryCard from "../components/CategoryCard";
import { categoryCardData } from "../data/data";

function categoryCard() {
  return (
    <div className="flex gap-4">
      <CategoryCard card={categoryCardData} />
      <CategoryCard card={categoryCardData} />
      <CategoryCard card={categoryCardData} />
    </div>
  );
}

export default categoryCard;
