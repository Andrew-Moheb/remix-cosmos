import React from "react";

function MainText({ children }) {
  return (
    <h1 className="text-[#5A63A2] font-[300] text-[50px] leading-[68px] text-left">
      {children}
    </h1>
  );
}

export default MainText;
