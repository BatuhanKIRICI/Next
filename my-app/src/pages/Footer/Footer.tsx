import React from "react";
import Image from "next/image";
import "@fontsource/lilita-one";
import "@fontsource/indie-flower";
import { useState } from "react";
import svgData from "../svgData";
import iconData from "../iconData";

const Footer: React.FC = () => {
  const [isHovered0, setIsHovered0] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className="flex flex-col relative justify-center bg-gray-800 w-auto h-[750px]">
      <div className="flex flex-row relative top-[-100px] left-[-50px]">
        <div className="flex flex-col relative ">
          <div className="w-60 h-10 relative cursor-pointer mt-16 left-80">
            <Image
              src="/assets/adanasu-bayilari-logo-removebg-preview.png"
              alt="Logo"
              fill
              priority={true}
              sizes="1"
            />
            <p className="text-white mt-24 w-[300px]">
              Firmamız bölgenin su tedarik hizmeti sağlayarak bölgede kaliteli
              ve güvenilir hizmet vermenin yanı sıra damacana ve pet şişe su
              ihtiyacını tamamen karşılamakla birlikte mutlu müşteri potansiyeli
              kazanmaktadır.
            </p>
          </div>
        </div>
        <div className="flex flex-row relative left-[540px] top-[60px] space-x-40">
          <div className="flex flex-col relative">
            <h1 className="text-yellow-500 font-indie-flower text-3xl font-bold">
              Hızlı Menü
            </h1>
            <ul className="mt-6 text-white cursor-pointer ">
              {
                <li
                  id="0"
                  onMouseOver={() => {
                    setIsHovered0(true);
                  }}
                  onMouseOut={() => {
                    setIsHovered0(false);
                  }}
                  className={
                    isHovered0
                      ? "flex flex-row relative items-center mb-6 text-yellow-600 duration-300"
                      : "flex flex-row relative items-center mb-6"
                  }
                >
                  <svg
                    className={
                      isHovered0
                        ? "fill-yellow-600 mr-3 duration-300"
                        : "fill-white mr-3"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="10"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                  192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 
                  73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 
                  192z"
                    />
                  </svg>
                  Anasayfa
                </li>
              }
              <div className="border-b border-dashed border-gray-500 mb-6 w-60 brightness-75" />
              {
                <li
                  id="1"
                  onMouseOver={() => {
                    setIsHovered1(true);
                  }}
                  onMouseOut={() => {
                    setIsHovered1(false);
                  }}
                  className={
                    isHovered1
                      ? "flex flex-row relative items-center mb-6 text-yellow-600 duration-300"
                      : "flex flex-row relative items-center mb-6"
                  }
                >
                  <svg
                    className={
                      isHovered1
                        ? "fill-yellow-600 mr-3 duration-300"
                        : "fill-white mr-3"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="10"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                  192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 
                  73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 
                  192z"
                    />
                  </svg>
                  Hakkımızda
                </li>
              }
              <div className="border-b border-dashed border-gray-500 mb-6 w-60 brightness-75" />
              {
                <li
                  id="2"
                  onMouseOver={() => {
                    setIsHovered2(true);
                  }}
                  onMouseOut={() => {
                    setIsHovered2(false);
                  }}
                  className={
                    isHovered2
                      ? "flex flex-row relative items-center mb-6 text-yellow-600 duration-300"
                      : "flex flex-row relative items-center mb-6"
                  }
                >
                  <svg
                    className={
                      isHovered2
                        ? "fill-yellow-600 mr-3 duration-300"
                        : "fill-white mr-3"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="10"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                  192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 
                  73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 
                  192z"
                    />
                  </svg>
                  Hizmetler
                </li>
              }
              <div className="border-b border-dashed border-gray-500 mb-6 w-60 brightness-75" />
              {
                <li
                  id="3"
                  onMouseOver={() => {
                    setIsHovered3(true);
                  }}
                  onMouseOut={() => {
                    setIsHovered3(false);
                  }}
                  className={
                    isHovered3
                      ? "flex flex-row relative items-center mb-6 text-yellow-600 duration-300"
                      : "flex flex-row relative items-center mb-6"
                  }
                >
                  <svg
                    className={
                      isHovered3
                        ? "fill-yellow-600 mr-3 duration-300"
                        : "fill-white mr-3"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="10"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                  192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 
                  73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 
                  192z"
                    />
                  </svg>
                  Blog
                </li>
              }
              <div className="border-b border-dashed border-gray-500 mb-6 w-60 brightness-75" />
              {
                <li
                  id="4"
                  onMouseOver={() => {
                    setIsHovered4(true);
                  }}
                  onMouseOut={() => {
                    setIsHovered4(false);
                  }}
                  className={
                    isHovered4
                      ? "flex flex-row relative items-center mb-6 text-yellow-600 duration-300"
                      : "flex flex-row relative items-center mb-6"
                  }
                >
                  <svg
                    className={
                      isHovered4
                        ? "fill-yellow-600 mr-3 duration-300"
                        : "fill-white mr-3"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="10"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                  192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 
                  73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 
                  192z"
                    />
                  </svg>
                  İletişim
                </li>
              }
            </ul>
          </div>
          <div className="flex flex-col relative">
            <h1 className="text-yellow-500 font-indie-flower text-3xl font-bold">
              Hizmetler
            </h1>
            <div className="flex flex-col relative ">
              <div
                className="w-[66px] h-[66px] relative cursor-pointer mt-4 mb-4
              flex flex-col justify-center "
              >
                <Image
                  src="/assets/damacanalar.png"
                  className="rounded-2xl "
                  alt="Logo"
                  fill
                  priority={true}
                  sizes="1"
                />
                <p className="text-white ml-20 mt-2 w-48 hover:text-gray-400 duration-300">
                  Damacana Su
                </p>
              </div>
              <div
                className="w-[66px] h-[66px] relative cursor-pointer mt-4 mb-4
              flex flex-col justify-center"
              >
                <Image
                  src="/assets/petler.png"
                  className="rounded-2xl"
                  alt="Logo"
                  fill
                  priority={true}
                  sizes="1"
                />
                <p className="text-white ml-20 mt-2 w-48 hover:text-gray-400 duration-300">
                  Pet Şişe Su
                </p>
              </div>
              <div
                className="w-[66px] h-[66px] relative cursor-pointer mt-4 mb-4
              flex flex-col justify-center"
              >
                <Image
                  src="/assets/exclusive.png"
                  className="rounded-2xl"
                  alt="Logo"
                  fill
                  priority={true}
                  sizes="1"
                />
                <p className="text-white ml-20 mt-2 w-48 hover:text-gray-400 duration-300">
                  Cam Şişe Su
                </p>
              </div>
              <div
                className="w-[66px] h-[66px] relative cursor-pointer mt-4 mb-4
              flex flex-col justify-center"
              >
                <Image
                  src="/assets/bardak.png"
                  className="rounded-2xl"
                  alt="Logo"
                  fill
                  priority={true}
                  sizes="1"
                />
                <p className="text-white ml-20 mt-2 w-48 hover:text-gray-400 duration-300">
                  Bardak Su
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative">
            <h1 className="text-yellow-500 font-indie-flower text-3xl font-bold ml-24">
              İletişim Bilgileri
            </h1>
            <div className="flex flex-col relative w-auto text-white mt-6 left-[94px]">
              {svgData.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-8 w-72">
                      {item.svg} {item.content}
                    </div>
                    <div
                      className={
                        item.content ===
                        "Yüreğir Sebze Hali No:64  Yüreğir/Adana"
                          ? ""
                          : "border-b border-dashed border-gray-500 mb-6 w-60 brightness-75"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-500 mb-6 w-full brightness-90" />
      <div className="flex flex-row relative justify-evenly top-[50px] ml-[50px]">
        <label className="text-white ">
          Copyright © 2023 Tüm Hakları Saklıdır.
        </label>
        <label className="text-white">
          Takip Et :
          <div className="flex flex-row justify-center gap-x-6  text-white mt-[-20px] ml-[80px]">
            {iconData.map((item, index) => {
              return (
                <div key={index} className="fill-yellow-500 object-cover">
                  {item.svg}
                </div>
              );
            })}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Footer;
