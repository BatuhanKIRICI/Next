import React from "react";
import svgData from "../svgData";
import iconData from "../iconData";
const HeaderTop = () => {
  return (
    <div
      className="bg-yellow-500 text-black h-10 flex justify-around 
    items-center text-sm"
    >
      <div className="flex justify-center items-center w-auto ">
        {svgData.map((item, index) => {
          return (
            <div key={index} className="flex flex-row pr-5">
              {item.svg} {item.content}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-around w-48 h-auto text-white">
        {iconData.map((item, index) => {
          return <div key={index}>{item.svg}</div>;
        })}
      </div>
    </div>
  );
};

export default HeaderTop;
