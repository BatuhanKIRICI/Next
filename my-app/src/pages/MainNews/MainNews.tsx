import React from "react";
import Image from "next/image";
import AnimateUpDown from "../../styles/AnimatedCircleBigUpDown.module.css";

function MainNews() {
  return (
    <div>
      <div className="flex flex-col relative justify-center items-center">
        <h1
          className="text-green-500 text-6xl font-gloria-hallelujah 
      py-[66px]"
        >
          Bizden Haberler
        </h1>
        <div>
          <div className="relative w-24 h-24 left-[-200px] top-[-120px]">
            <Image
              className={`flex ${AnimateUpDown.upDownAnimation} items-start`}
              src="/assets/animation6.png"
              alt="animation up down"
              fill
              sizes="1"
            />
          </div>
          <div
            className="flex flex-row justify-center items-stretch gap-24
       bg-white pb-32 -mt-32"
          >
            <div className="flex flex-col justify-start bg-white">
              <div
                className="relative flex-start left-0 w-[333px] h-[333px] top-[20px] 
      right-[175px] bg-gray-50 cursor-pointer "
              >
                <Image
                  className="brightness-[100%] hover:brightness-[80%] ease-in-out 
              duration-300 rounded-xl"
                  src="/assets/mersin-tup-su-sirma-su-728978.jpeg"
                  alt="Dip dalga"
                  fill
                  sizes="1"
                />
              </div>
              <h2
                className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
          hover:text-green-600 cursor-pointer"
              >
                Çukurova Su Bayisi
              </h2>
              <p className="text-sm mt-3 ml-10 pb-8">Çukurova Su Bayisi...</p>
              <hr />
              <i className="pt-8 ml-10 flex flex-row items-center">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 
                       64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 
                       64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 
                       10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 
                       16H64c-8.8 0-16-7.2-16-16V192z"
                  />
                </svg>
                <p>13.11.2023 13:14</p>
              </i>
            </div>
            <div className="flex flex-col justify-start bg-white">
              <div
                className="relative flex-start left-0 w-[333px] h-[333px] top-[20px] 
      right-[175px] bg-white cursor-pointer"
              >
                <Image
                  className="brightness-[100%] hover:brightness-[80%] ease-in-out 
              duration-300 rounded-xl"
                  src="/assets/sirma4-1.jpg"
                  alt="Dip dalga"
                  fill
                  sizes="1"
                />
              </div>
              <h2
                className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
          hover:text-green-600 cursor-pointer"
              >
                Kozan Su Bayisi
              </h2>
              <p className="text-sm mt-3 ml-10 pb-8">Kozan Su Bayisi...</p>
              <hr />
              <i className="pt-8 ml-10 flex flex-row items-center">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 
                       64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 
                       64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 
                       10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 
                       16H64c-8.8 0-16-7.2-16-16V192z"
                  />
                </svg>
                <p>13.11.2023 13:14</p>
              </i>
            </div>
            <div className="flex flex-col justify-start bg-white">
              <div
                className="relative flex-start left-0 w-[333px] h-[333px] top-[20px] 
      right-[175px] bg-white cursor-pointer"
              >
                <Image
                  className="brightness-[100%] hover:brightness-[80%] ease-in-out 
              duration-300 rounded-xl"
                  src="/assets/sirma2-1.jpg"
                  alt="Dip dalga"
                  fill
                  sizes="1"
                />
              </div>
              <h2
                className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
          hover:text-green-600 cursor-pointer "
              >
                Sarıçam Su Bayisi
              </h2>
              <p className="text-sm mt-3 ml-10 pb-8">Sarıçam Su Bayisi...</p>
              <hr />
              <i className="pt-8 ml-10 flex flex-row items-center">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 
                       64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 
                       64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 
                       10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 
                       16H64c-8.8 0-16-7.2-16-16V192z"
                  />
                </svg>
                <p>13.11.2023 13:14</p>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNews;
