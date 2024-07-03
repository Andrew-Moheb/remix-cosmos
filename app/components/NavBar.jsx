import { CiShoppingCart } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { IoEarthOutline } from "react-icons/io5";
import { MdLanguage, MdOutlineLanguage } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import React from "react";

function NavBar() {
  return (
    <div className="flex  items-center  w-[90%] bg-slate-50/50 ml-[5%] pt-[32px] pb-[32px] rounded-lg">
      <div className="w-[396px] ml-[40px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/ac28/cce8/cc092164105205b5ac27e09c7daeaba4?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6EM-h8aE82hiHbVpNwX4z9OkMfgXQRr2imeuwAoJ4jSOp3WUNH9gDziZHo3vDZz3JCUEAa8dlQSWK0tXRssTfqpWIBoHl4k0hq5RIwxSDOQUSLas9WS6NzX3s--hFGQICJs410-~7CtQHlMvjqWvSnr0L34hvgN7bTUT1FGjcko0SMjEk-vkWrFN10zSv73KI40g3cEFsd5t~v3ooh3dY2ZCKX3bs7fSB1fNwpLTsXNWpYaIhXZVwUl0Fz8HxA-R07i~tpJkVRATgd7bTSiIqlyp9EgAlHpQE-bsU4GzH0LltOy3gBFk16et4U4EbjIBeoNky9T~f3AlLxf~3It-Q__"
          alt="logo"
          className="w-[58px] h-[60px]"
        />
      </div>
      <div className="w-[503px] flex items-center gap-[50px]">
        <h1 className="text-[#131B55] text-[16px] font-[500] leading-[24px]">
          Home
        </h1>
        <h1 className="text-[#5A63A2] text-[16px] font-[300] leading-[22px]">
          Workshop
        </h1>
        <h1 className="text-[#5A63A2] text-[16px] font-[300] leading-[22px]">
          Product
        </h1>
        <h1 className="text-[#5A63A2] text-[16px] font-[300] leading-[22px]">
          Services
        </h1>
        <h1 className="text-[#5A63A2] text-[16px] font-[300] leading-[22px]">
          Profile
        </h1>
      </div>
      <div className="w-[389px] flex items-center gap-[20px] justify-end mr-[48px] relative">
        <div className="flex items-center justify-center w-[40px]  h-[40px] rounded-full border-[1px] border-[#E7E7FA]">
          <PiShoppingCartSimple color="#081ABB" className="w-[18px] h-[18px]" />
        </div>
        <div className="w-[16px] h-[16px] bg-[#F86A6A]  absolute top-[-5px] right-[4rem] flex items-center justify-center text-[12px] rounded-full text-white leading-[12px]">
          2
        </div>
        <div className="flex items-center gap-[8px]">
          <div>
            <IoEarthOutline color="#081ABB" />
          </div>
          <span className="text-[14px] font-[500] leading-[20px] text-[#081ABB]">
            EN
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
