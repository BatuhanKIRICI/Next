import React, { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(true);
  };

  const toggleFalse = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div
        className="flex relative flex-col justify-start bg-gray-800 p-3 
w-[675px] top-[33px] right-[625px]"
      >
        <a href="#" className="flex text-white my-1">
          <button>Anasayfa</button>
        </a>
        <div className="border-t border-dashed border-gray-500 my-2" />
        <a
          href="#"
          className="flex flex-row relative items-center justify-between text-white my-1"
        >
          <button>Kurumsal</button>
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 
      32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 
      14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 
      32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </a>
        <div className="border-t border-dashed border-gray-500 my-2" />
        <a
          href="#"
          className="flex flex-row relative items-center justify-between text-white my-1"
        >
          <button>Bayiler</button>
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 
      32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 
      14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 
      32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </a>
        <div className="border-t border-dashed border-gray-500 my-2" />
        <a href="#" className="flex text-white my-2">
          <button>Ürünler</button>
        </a>
        <div className="border-t border-dashed border-gray-500 my-2" />
        <a href="#" className="flex text-white my-2">
          <button>Hizmet Bölgeleri</button>
        </a>
        <div className="border-t border-dashed border-gray-500 my-2" />
        <a href="#" className="flex text-white my-1">
          <button>İletişim</button>
        </a>
      </div>
    </div>
  );

  {
    /* <button
        onClick={toggleButton}
        className="text-white focus:outline-none w-12 h-12"
      ></button>
      {isOpen && (
        <div className="flex flex-col relative">
          <svg
            onClick={toggleFalse}
            className="w-10 h-8"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 
            4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 
            84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 
            45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 
            4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>
          <div
            className="flex relative flex-col justify-start bg-gray-800 p-3 
            w-[675px] top-[183px] right-[225px]"
          >
            <a href="#" className="flex text-white my-1">
              <button>Anasayfa</button>
            </a>
            <div className="border-t border-dashed border-gray-500 my-2" />
            <a
              href="#"
              className="flex flex-row relative items-center justify-between 
                text-white my-1"
            >
              <button>Kurumsal</button>
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 
                  32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 
                  14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 
                  32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </a>
            <div className="border-t border-dashed border-gray-500 my-2" />
            <a
              href="#"
              className="flex flex-row relative items-center justify-between 
                text-white my-1"
            >
              <button>Bayiler</button>
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 
                  32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 
                  14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 
                  32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </a>
            <div className="border-t border-dashed border-gray-500 my-2" />
            <a href="#" className="flex text-white my-2">
              <button>Ürünler</button>
            </a>
            <div className="border-t border-dashed border-gray-500 my-2" />
            <a href="#" className="flex text-white my-2">
              <button>Hizmet Bölgeleri</button>
            </a>
            <div className="border-t border-dashed border-gray-500 my-2" />
            <a href="#" className="flex text-white my-1">
              <button>İletişim</button>
            </a>
          </div>
        </div>
      )} */
  }

  {
    /* <button
        onClick={toggleButton}
        className="text-white focus:outline-none w-12 h-12"
      ></button>
      {!isOpen && (
        <div onClick={toggleFalse} className="flex flex-col relative">
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            height="8"
            width="7"
            viewBox="0 0 448 512"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 
          32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7
           0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 
           17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0
            32 14.3 32 32z"
            />
          </svg> */
  }

  {
    /* <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          height="8"
          width="7"
          viewBox="0 0 448 512"
        >
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 
          32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7
           0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 
           17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0
            32 14.3 32 32z"
          />
        </svg> */
  }
};
export default Hamburger;
