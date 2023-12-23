import React from "react";
import Image from "next/image";
import "@fontsource/gloria-hallelujah";
import "@fontsource/orbitron";
import "@fontsource/lilita-one";
import {
  MAIN_SERVICE_BACKGROUND_URL,
  MAIN_SERVICE_TITLE,
  mainServiceData,
} from "./data";
import { ServiceCard } from "./ServiceCard";

function MainServices() {
  return (
    <div
      className="flex flex-col relative top-[300px] bg-gray-100 
    items-center pb-[250px] "
    >
      <div
        className="absolute flex-start left-0 w-full h-[50px]  
      right-[175px] bg-gray-50"
      >
        <Image
          className="brightness-[95%]"
          src={MAIN_SERVICE_BACKGROUND_URL}
          alt="Dip dalga"
          fill
          sizes="1"
        />
      </div>

      <h1
        className="text-green-500 text-6xl font-gloria-hallelujah 
      py-[66px]"
      >
        {MAIN_SERVICE_TITLE}
      </h1>
      <div
        className="flex flex-row justify-center items-stretch gap-8
       bg-gray-100 "
      >
        {mainServiceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default MainServices;
