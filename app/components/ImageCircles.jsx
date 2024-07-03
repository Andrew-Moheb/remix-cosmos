import React from "react";

function ImageCircles() {
  return (
    <div className="w-[50%] h-full  overflow-clip relative">
      <div className="absolute top-[2.5rem] right right-[-5rem] w-[26rem] h-[26rem]  rounded-full border-2 border-white z-30">
        <img
          src="https://s3-alpha-sig.figma.com/img/3150/3b0f/1dc52bef2512793b224f93915029ea07?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rlk7x3WJ4LuumsH3NfSRpxF6zk1-ZONq3hBTGywINwyy4tX2OPBtIUK~Pl3E1Su~hgIjT5vtZSO26EdPmt2DcCFNnVQN0R5Tp41p5dYG2g0xKDq74dtC1fhG7hDGZHuU3-nOJ6xA5cu9p9DDKO5SCKwspINCof28uyBDOw64axJOt0~fS427B3HbIS8eBVDhcPPy7Xn4sbJgabgEOd8p22atxxaA7HlT12k67dBRHhgbypYDH2tW-diBDT1dGc7mTvuKd-Vh9qjuKEhLKu6z8TFawK4ITCHwlYkXFqpDxTKMbXqREWRFCsTZ4SDzfAgAiefGsG03zhfXF2VaSyaKfA__"
          alt="catimg"
          className="rounded-full w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-[42rem] h-[42rem] bg-[#E7E7FA] rounded-full  z-10 absolute right-[-4 rem] t top-[8rem]"></div>
      <div className="w-[8rem] h-[8rem] bg-green-300 rounded-full top-[13rem] absolute z-20">
        <img
          src="https://s3-alpha-sig.figma.com/img/8df3/4b88/8957cc9a378225d7494c239c5e98dc9c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COkutm7kb6o7tSjyVc7o4mfe8VsC3TIoAyUQwFMUSqemTeH4-tzwXPGvT4ZEXy53VD~88ZGBLBvunQM3eDvCfFkXNNsxCUgDUsfRhRfGBZ0IHO4FSM38ug8Y~0PFcyHRCQQIY-hO5WqYYnmdOYm45HvDmHjnIbOeIf5MhqStTUvPXSGlee4W7ZnDyQaIQ5D3syF6VYZmN8mfUZnb18Ee6ozrefecSoOvjTEBgWeYKlaXaoOlmmBtYnKs-4sGlcJaG4E7fMa~t6jy6UcMh0lXYv7Q27Ej8oRqhRPukGyXsXsyyteInbr44NW0epVksDqtH5JsMeA5FmRhDPYUtoii9g__"
          alt="catimg"
          className="rounded-full w-full h-full object-cover object-center border-4 border-white"
        />
      </div>

      <div className="z-20 w-[7rem] h-[7rem] bg-green-200 rounded-full absolute left-[9rem] top-[20rem]">
        <img
          src="https://s3-alpha-sig.figma.com/img/a4ac/bba7/9f7b7e18abd3819af101e594b2bbc756?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cz073PF3V~JBDfn3SOMUyntts5VD13YOwWrH-62YXk54o1KASFnbID5T84N2OMVW50UyiwPcIyCw-on65pcWh0TiEeSN6J2jXvYfEmmwMC26MAMUjs4V-tswbDd2cZSzHaonsMewBYwDxDJD6wGHeRlUqvLzYz2RuiCKKRhzOBti6UZGrzXS0GjO1tZ~9BoLRX~tSzYvX0UC4834LQCVsKHUl74Y8BVJBcbF6Ds0MnVIjwsn7R7TkDOS5YY3xsQycEAjsvMY21WNRXDgoT-XWIylVyI17y0uchPKZ317bV7DTpHACDfC4hLZ-78Ajc5VbFGR9FXwMuCi7pglqiy1mA__"
          alt="catimg"
          className="rounded-full w-full h-full object-cover object-center border-4 border-white"
        />
      </div>
    </div>
  );
}

export default ImageCircles;
