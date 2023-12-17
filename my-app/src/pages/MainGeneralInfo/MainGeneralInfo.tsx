import React from "react";
import Image from "next/image";
import AnimateUpDown from "../../styles/AnimatedCircleBigUpDown.module.css";
import AnimateUpDown2 from "../../styles/AnimatedCircleBigUpDown2.module.css";
import AnimateLeftRight from "../../styles/AnimatedCircleLeftRight.module.css";
import "@fontsource/indie-flower";
import "@fontsource/gloria-hallelujah";
import "@fontsource/lilita-one";
import "@fontsource/orbitron";

function MainGeneralInfo() {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`relative w-[120px] h-[120px] top-[60px] right-[100px] 
          rounded-[100%] bg-blue-400 ${AnimateUpDown2.upDownAnimation}`}
      />
      <div className="relative w-[600px] h-[400px] top-[125px] right-[175px]">
        <Image
          className="rounded-[50%] object-cover z-10"
          src="/assets/mersin-tup-su-sirma-su-728978.jpeg"
          alt="Mersin su"
          fill
          sizes="1"
        />
        <div
          className="absolute w-[600px] h-[400px] right-[50px] rounded-[50%]
         bg-orange-200"
        />
        <div
          className={`absolute w-[120px] h-[120px] top-[300px] right-[50px] 
          rounded-[100%] bg-green-600 ${AnimateUpDown.upDownAnimation}`}
        />
      </div>
      <div
        className={`relative w-[40px] h-[40px] top-[-50px] right-[-750px] 
          rounded-[100%] bg-yellow-500 ${AnimateLeftRight.leftRightAnimation}`}
      />
      <div className="flex flex-col relative w-[575px] gap-5 top-[140px]">
        <h1 className="text-5xl font-orbitron">ADANA SU BAYİLERİ</h1>
        <h4 className="text-2xl text-yellow-500 font-gloria-hallelujah">
          Adana Damacana Su
        </h4>
        <p>
          Firmamız doğal kaynaklardan gelen suyun el değmemiş ortamda ve
          hijyenik olarak şişelenmesiyle tüketicilere sunulmak üzere hazırlanır.
          Adana ve ilçelerinde su bayilerimiz ile bölgenin bu ihtiyacını
          karşılamak için sizlere hizmet vermekteyiz.
        </p>
      </div>
    </div>
  );
}

export default MainGeneralInfo;
