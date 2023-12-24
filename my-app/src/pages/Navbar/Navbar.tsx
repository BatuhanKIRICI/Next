import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { navbarInfo } from "./navbarInfo";
import { dealers } from "./dealers";
import { svg } from "./svg";

const Navbar: React.FC = () => {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);

  const svg_1 = svg.filter((item) => item.id === 0);
  // const svg_2 = svg.filter((item) => item.id === 1);

  console.log(svg_1);

  return (
    <nav className={svg.content}>
      {/* <Link href="/"> */}
      <div
        onMouseOver={() => {
          setIsOpenFirst(false);
          setIsOpenSecond(false);
        }}
        className="ml-6 mb-2 lg:ml-0 w-48 h-8 sm:w-72 sm:h-12 lg:w-44 lg:h-10
           xl:w-64 xl:h-12 relative"
      >
        <Image
          src="/assets/adanasu-bayilari-logo-removebg-preview.png"
          alt="Logo"
          fill
          priority={true}
          sizes="1"
        />
      </div>
      <button
        onMouseOver={() => {
          setIsOpenFirst(false);
          setIsOpenSecond(false);
        }}
      >
        {navbarInfo.map((item, index) =>
          item.id === 0 ? (
            <div className={item.class} key={index}>
              {item.content}
            </div>
          ) : (
            <></>
          )
        )}
      </button>
      {/* </Link> */}
      <div>
        <div
          onMouseOver={() => {
            setIsOpenFirst(true);
            setIsOpenSecond(false);
          }}
          className="text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-md px-5 py-2.5 text-center 
          hidden lg:flex justify-between items-center duration-300 cursor-pointer"
        >
          {navbarInfo.map((item, index) =>
            item.id === 1 ? <div key={index}>{item.content}</div> : <></>
          )}
          {!isOpenFirst ? (
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          ) : (
            <svg
              className="w-2.5 h-2.5 ms-3 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 
              12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 
              12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
              />
            </svg>
          )}
        </div>

        {isOpenFirst && (
          <div
            className="bg-gray-800 text-gray-400 absolute top-16 flex 
            flex-col items-start rounded-md
           p-3 w-[200px] ml-4"
          >
            <div
              onMouseOver={() => {
                setIsOpenFirst(true);
                setIsOpenSecond(false);
              }}
              onMouseOut={() => {
                setIsOpenSecond(false);
                setIsOpenFirst(false);
              }}
              className="w-full hover:text-white cursor-pointer 
            rounded-r-lg z-50"
            >
              {dealers.map((item, index) =>
                item.id === 0 ? <div key={index}>{item.title}</div> : <></>
              )}
            </div>
          </div>
        )}
      </div>
      <div
        className="absolute hidden bg-white shadow-md mt-2 py-2 w-40 
        rounded-md group-hover:block"
      ></div>
      <div>
        <div
          onMouseOver={() => {
            setIsOpenSecond(true);
            setIsOpenFirst(false);
          }}
          className="text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-md px-5 py-2.5 text-center 
          hidden lg:flex justify-between items-center duration-300 cursor-pointer"
        >
          {navbarInfo.map((item, index) =>
            item.id === 3 ? <div key={index}>{item.content}</div> : <></>
          )}
          {!isOpenSecond ? (
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          ) : (
            <svg
              className="w-2.5 h-2.5 ms-3 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 
              12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 
              12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
              />
            </svg>
          )}
        </div>
        {isOpenSecond && (
          <div
            onMouseOver={() => {
              setIsOpenFirst(false);
              setIsOpenSecond(true);
            }}
            onMouseOut={() => {
              setIsOpenSecond(false);
              setIsOpenFirst(false);
            }}
            className="bg-gray-800 text-gray-400 absolute top-16 flex 
            flex-col items-start rounded-md p-3 w-[200px] ml-4"
          >
            {dealers.map(
              (item, index) =>
                item.id !== 0 && (
                  <div
                    key={index}
                    className="w-full hover:text-white cursor-pointer 
              rounded-r-lg p-2"
                  >
                    {item.title}
                  </div>
                )
            )}
          </div>
        )}
      </div>
      {/* <Link> */}
      {navbarInfo.map((item, index) => {
        return item.id > 3 ? (
          <button
            key={index}
            onMouseOver={() => {
              setIsOpenFirst(false);
              setIsOpenSecond(false);
            }}
            className="text-black bg-white focus:ring-4 focus:ring-blue-300 
            font-medium rounded-lg text-md px-5 py-2.5 text-center 
            hidden lg:flex items-center dark:bg-white dark:hover:text-white
            dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:-translate-y-1 
            hover:bg-blue-500 duration-300"
          >
            {item.content}
          </button>
        ) : (
          <></>
        );
      })}
      {/* <Hamburger /> */}
      <button
        onMouseOver={() => {
          setIsOpenFirst(false);
          setIsOpenSecond(false);
        }}
        className="transition transform delay-150 bg-green-700 hidden xl:flex
      hover:-translate-y-1 hover:bg-yellow-500 duration-300 cursor-pointer 
      text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-400"
      >
        MESAJ GÖNDER
      </button>
    </nav>
  );
};

export default Navbar;
