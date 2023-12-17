import React from "react";
import Image from "next/image";
import AnimateUpDown from "../../styles/AnimatedImageUpDown.module.css";
import AnimateLeftRight from "../../styles/AnimatedImageLeftRight.module.css";
import "@fontsource/permanent-marker";
import "@fontsource/lilita-one";
import "@fontsource/indie-flower";

function MainImageTop() {
  return (
    <div
      className="relative h-[700px] flex items-start justify-center 
    flex-col "
    >
      <div
        className="absolute inset-0 bg-cover bg-center 
      bg-[url('/assets/sirma-jpg.png')] "
        style={{
          filter: `brightness(${40}%)`,
        }}
      />
      <div className="relative w-40 h-40 brightness-75 left-48">
        <Image
          className={`flex ${AnimateUpDown.upDownAnimation} items-start`}
          src="/assets/animation2.png"
          alt="animation up down"
          fill
          sizes="1"
        />
      </div>
      <h1
        className="flex relative justify-items-center text-white 
            text-8xl w-[500px] ml-80 font-indie-flower font-black"
      >
        Adana Su Bayileri
      </h1>
      <div className="relative w-40 h-32 top-28 brightness-50 ">
        <Image
          className={`${AnimateLeftRight.leftRightAnimation}`}
          src="/assets/animation3.png"
          alt="animation up down"
          fill
          sizes="1"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div
          className="flex absolute h-40 w-40 left-[1280px] brightness-75 
        top-[540px]"
        >
          <Image src="/assets/animation1.png" alt="grape" fill sizes="1" />
        </div>
      </div>

      <div
        className="flex relative h-[40px] w-full flex-start top-[90px] 
      "
      >
        <Image src="/assets/bottom-bg-shape.png" alt="Bottom" fill sizes="1" />
      </div>
    </div>
  );
}

export default MainImageTop;
