import React from "react";
function Label({ children, icon }) {
  return (
    <div className="flex gap-[2px] items-center bg-[#E7E7FA] w-[152px] justify-center rounded-full px-[10px] py-[6px]">
      <span>{icon}</span>
      <h1 className="font-[300] text-[14px] leading-[21px] tracking-[20%] text-[#5A63A2]">
        {children}
      </h1>
    </div>
  );
}

export default Label;
