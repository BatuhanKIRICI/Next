import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);

  return (
    <nav
      className="flex flex-row justify-center items-center my-5 -ml-6
       bg-white sticky top-0 gap-x-7 z-10"
    >
      <Link href="/">
        <div
          onMouseOver={() => {
            setIsOpenFirst(false);
            setIsOpenSecond(false);
          }}
          className="w-72 h-12 relative"
        >
          <Image
            src="/assets/adanasu-bayilari-logo-removebg-preview.png"
            alt="Logo"
            fill
            priority={true}
            sizes="1"
          />
        </div>
      </Link>
      <Link href="/">
        <button
          onMouseOver={() => {
            setIsOpenFirst(false);
            setIsOpenSecond(false);
          }}
          className="text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          inline-flex items-center dark:bg-white dark:hover:text-white
          dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:-translate-y-1 
          hover:bg-blue-500 duration-300"
        >
          ANASAYFA
        </button>
      </Link>
      <div>
        <div
          onMouseOver={() => {
            setIsOpenFirst(true);
            setIsOpenSecond(false);
          }}
          className="text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          flex justify-between items-center duration-300 cursor-pointer"
        >
          KURUMSAL
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
            rounded-r-lg"
            >
              <p>Hakkımızda</p>
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
          font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          flex justify-between items-center duration-300 cursor-pointer"
        >
          BAYİLER
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
            flex-col items-start rounded-md
           p-3 w-[200px] ml-4"
          >
            <div
              className="w-full hover:text-white cursor-pointer 
            rounded-r-lg p-2"
            >
              <p>Çukurova Su Bayileri</p>
            </div>
            <div
              className="w-full hover:text-white cursor-pointer 
            rounded-r-lg p-2"
            >
              <p>Yüreğir Su Bayileri</p>
            </div>
            <div
              className="w-full hover:text-white cursor-pointer 
            rounded-r-lg p-2"
            >
              <p>Seyhan Su Bayileri</p>
            </div>
            <div
              className="w-full hover:text-white cursor-pointer 
            rounded-r-lg p-2"
            >
              <p>Sarıçam Su Bayileri</p>
            </div>
            <div
              className="w-full hover:text-white cursor-pointer 
            rounded-r-lg p-2"
            >
              <p>Kozan Su Bayileri</p>
            </div>
          </div>
        )}
      </div>

      <Link href="/ürünler">
        <button
          onMouseOver={() => {
            setIsOpenFirst(false);
            setIsOpenSecond(false);
          }}
          className="text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          inline-flex items-center dark:bg-white dark:hover:text-white
          dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:-translate-y-1 
          hover:bg-blue-500 duration-300"
        >
          ÜRÜNLER
        </button>
      </Link>
      <Link href="/hizmet_bölgeleri">
        <button
          onMouseOver={() => {
            setIsOpenFirst(false);
            setIsOpenSecond(false);
          }}
          className="text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          inline-flex items-center dark:bg-white dark:hover:text-white
          dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:-translate-y-1 
          hover:bg-blue-500 duration-300"
        >
          HİZMET BÖLGELERİ
        </button>
      </Link>
      <Link href="/iletişim">
        <button
          onMouseOver={() => {
            setIsOpenFirst(false);
            setIsOpenSecond(false);
          }}
          className="text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center 
          inline-flex items-center dark:bg-white dark:hover:text-white
          dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:-translate-y-1 
          hover:bg-blue-500 duration-300"
        >
          İLETİŞİM
        </button>
      </Link>
      <button
        onMouseOver={() => {
          setIsOpenFirst(false);
          setIsOpenSecond(false);
        }}
        className="transition transform delay-150 bg-green-700 
      hover:-translate-y-1 hover:bg-yellow-500 duration-300 cursor-pointer 
      text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-400"
      >
        MESAJ GÖNDER
      </button>
    </nav>
  );
};

export default Navbar;
