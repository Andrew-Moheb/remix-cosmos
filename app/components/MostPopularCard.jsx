import Button from "./Button";

function MostPopularCard({ card }) {
  return (
    <div className="border-[1px] border-[#E7E7FA] border-solid flex flex-col items-center h-[477px] w-[342px]  relative rounded-[20px] p-[24px]">
      <img
        src={card.imgsrc}
        alt={card.title}
        className="w-[294px] h-[190px] object-cover object-center rounded-[8px]"
      />
      <div className="flex items-center w-full mt-[20px] justify-between">
        <h1 className="text-[20px] text-[#131B55] line- font-[275] ">
          {card.title}
        </h1>
        <span className="text-[#131B55] font-medium">{card.price} SAR</span>
      </div>
      <div className=" text-left flex flex-col gap-[8px] mt-[21px] w-full">
        <h3 className="items-start flex text-[12px] text-[#A1A1A1] leading-[16px] font-[275] tracking-[30%]">
          DETAILS
        </h3>
        <p className="font-[300] text-[14px] text-[#A1A1A1]">{card.details}</p>
      </div>
      <div className={`mt-[24px]`}>
        <Button>Book</Button>
      </div>
    </div>
  );
}

export default MostPopularCard;
