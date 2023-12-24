import React from "react";
import infoData from "./infoData";
import iconData from "./iconData";
const HeaderTop = () => {
  return (
    <div
      className="bg-yellow-500 h-16 text-black text-xl 2xl:h-16 2xl:text-lg
      xl:h-16 xl:text-lg lg:h-16 lg:text-base md:h-16 md:text-base sm:h-16 
     flex md:flex-row  md:justify-around items-center text-center"
    >
      <div className="ml-10 md:ml-0 flex flex-row relative justify-center text-center ">
        {infoData.map((item, index) => {
          return (
            <div key={index} className="flex flex-row h-16 pr-5 items-center">
              {item.svg} {item.content}
            </div>
          );
        })}
      </div>

      <div className="lg:flex flex-row hidden justify-around w-60 h-auto text-white">
        {iconData.map((item, index) => {
          return <div key={index}>{item.svg}</div>;
        })}
      </div>
    </div>
  );
};

export default HeaderTop;
