import React from "react";
function CategoryCard({ card }) {
  return (
    <div className="relative w-[294px] h-[248px] bg-slate-100 rounded-md ">
      <img
        src={card.imgsrc}
        alt={card.title}
        className="object-cover object-center w-full h-full rounded-[10px]"
      />
      <h1 className="absolute top-0 right-0 bg-white w-auto h-[28px] flex items-center rounded-tr-[5px]  rounded-bl-[10px] rounded-tl-[0px] rounded-br-[0px] rounded-l-lg px-[6px] py-[4px] font-[400] text-[14px] leading-[20px] text-[#131B55]">
        {card.title}
      </h1>

      <span
        className={`absolute bg-white w-[15px] h-[15px] top-[28px] right-[0px] rounded-[5px]`}
        style={{ boxShadow: "10px -5px 0px white", background: "transparent" }}
      ></span>
      <span
        className="absolute top-0 bg-white w-[14px] h-[14px]  right-[84.5px] rounded-[5px]"
        style={{ boxShadow: "10px -4px 0px white", background: "transparent" }}
      ></span>
    </div>
  );
}

export default CategoryCard;
