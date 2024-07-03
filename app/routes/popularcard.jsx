import MostPopularCard from "../components/MostPopularCard";
import { popularCardData } from "../data/data";

function popularcard() {
  return (
    <div className="flex gap-5">
      <MostPopularCard card={popularCardData} />
      <MostPopularCard card={popularCardData} />
      <MostPopularCard card={popularCardData} />
    </div>
  );
}

export default popularcard;
