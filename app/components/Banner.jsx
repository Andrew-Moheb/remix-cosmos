import Label from "./Label";
import MainText from "./MainText";
import ImageCircles from "./ImageCircles";
import React from "react";

function Banner() {
  return (
    <div className="w-[80rem] h-[30rem] bg-slate-50/30 mt-10 rounded-md flex items-center">
      <div className="w-[50%] flex flex-col items-start ml-[80px] justify-start h-[70%] mt-[10px]">
        <Label icon={"🐶"}>PET SERVICE</Label>
        <div className="w-[463px] h-[204px] mt-[20px]">
          <MainText>Pet shop and grooming services to your doorstep</MainText>
        </div>
        <div className="mt-[56px]">
          <button className="w-[160px] h-[40px] rounded-[58px] py-[10px] px-[44.5px] text-[14px] font-[500] leading-[20px] bg-[#081ABB] text-white">
            shop now
          </button>
        </div>
      </div>
      {/* <div className=""> */}
      <ImageCircles />
      {/* </div> */}
    </div>
  );
}

export default Banner;
