import React from "react";

function Button({ children }) {
  return (
    <button
      className={`h-[48px] w-[120px] rounded-full font-[500] text-[16px] text-[#081ABB] border-[1px] border-[#081ABB] bg-white`}
    >
      {children}
    </button>
  );
}

// textSize={"16"}
// bg={"white"}
// borderColor={"#081ABB"}
// w={"120px"}
// h={"48px"}
// fontWeight={"500"}
// textColor={"#081ABB"}
// roundedCorners={"full"}
// text={"Book"}

export default Button;
