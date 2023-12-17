import React from "react";
import Image from "next/image";
import "@fontsource/gloria-hallelujah";
import "@fontsource/orbitron";
import "@fontsource/lilita-one";

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
          src="/assets/bottom-bg-shape.png"
          alt="Dip dalga"
          fill
          sizes="1"
        />
      </div>

      <h1
        className="text-green-500 text-6xl font-gloria-hallelujah 
      py-[66px]"
      >
        Hizmetlerimiz
      </h1>
      <div
        className="flex flex-row justify-center items-stretch gap-8
       bg-gray-100 "
      >
        <div className="flex flex-col justify-start bg-white">
          <h2
            className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
          hover:text-green-600"
          >
            Damacana Su
          </h2>
          <p className="text-sm mt-3 ml-10">Damacana Su...</p>
          <div
            className="relative flex-start left-0 w-[400px] h-[375px] top-[20px] 
      right-[175px] bg-gray-50 cursor-pointer "
          >
            <Image
              className="brightness-[100%] hover:brightness-[80%] ease-in-out 
              duration-300"
              src="/assets/damacanalar.png"
              alt="Dip dalga"
              fill
              sizes="1"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start bg-white">
          <h2
            className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
          hover:text-green-600 cursor-pointer"
          >
            Pet Şişe Su
          </h2>
          <p className="text-sm mt-3 ml-10">Pet Şişe Su...</p>
          <div
            className="relative flex-start left-0 w-[400px] h-[375px] top-[20px] 
      right-[175px] bg-gray-50 cursor-pointer"
          >
            <Image
              className="brightness-[100%] hover:brightness-[80%] ease-in-out 
              duration-300"
              src="/assets/petler.png"
              alt="Dip dalga"
              fill
              sizes="1"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start bg-white">
          <h2
            className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
          hover:text-green-600 cursor-pointer"
          >
            Cam Şişe Su
          </h2>
          <p className="text-sm mt-3 ml-10">Cam Şişe Su...</p>
          <div
            className="relative flex-start left-0 w-[400px] h-[375px] top-[20px] 
      right-[175px] bg-gray-50 cursor-pointer"
          >
            <Image
              className="brightness-[100%] hover:brightness-[80%] ease-in-out 
              duration-300"
              src="/assets/exclusive.png"
              alt="Dip dalga"
              fill
              sizes="1"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start bg-white">
          <h2
            className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
          hover:text-green-600 cursor-pointer"
          >
            Bardak Su
          </h2>
          <p className="text-sm mt-3 ml-10">Bardak Su...</p>
          <div
            className="relative flex-start left-0 w-[400px] h-[375px] top-[20px] 
      right-[175px] bg-gray-50 cursor-pointer"
          >
            <Image
              className="brightness-[100%] hover:brightness-[80%] ease-in-out 
              duration-300"
              src="/assets/bardak.png"
              alt="Dip dalga"
              fill
              sizes="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
