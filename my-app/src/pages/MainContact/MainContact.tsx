import React from "react";
import Image from "next/image";

function MainContact() {
  return (
    <div className="pt-8 mb-[-275px]">
      <div className="flex relative flex-col">
        <div
          className="flex relative flex-start justify-center h-[400px] w-full 
    mt-[200px] inset-0 bg-cover bg-center bg-[url('/assets/sirma-jpg.png')] "
          style={{ filter: `brightness(${15}%)` }}
        />
        <div className="flex flex-row relative">
          <div
            className="relative w-[400px] h-[250px] brightness-[100%] 
            top-[-400px] left-[350px]"
          >
            <Image
              className="w-12 h-12 z-50 rounded-[10px]"
              src="/assets/mersin-tup-su-sirma-su-728978.jpeg"
              alt="Mersin su"
              fill
              sizes="1"
            />
          </div>
          <div className="flex flex-col relative ">
            <h1
              className="text-white text-4xl ml-[700px] mt-[-333px] 
            w-[450px]"
            >
              Bizimle İletişime Geçmek İster Misiniz?
            </h1>
            <button
              className="transition transform delay-150 bg-green-700 w-[200px] 
          h-[50px] mt-[40px] ml-[700px]
      hover:-translate-y-1 hover:bg-yellow-500 duration-300 cursor-pointer 
      text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-400"
            >
              MESAJ GÖNDER
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative h-[40px] w-full flex-start bottom-[288px]">
        <Image src="/assets/bottom-bg-shape.png" alt="Bottom" fill sizes="1" />
      </div>
    </div>
  );
}

export default MainContact;
