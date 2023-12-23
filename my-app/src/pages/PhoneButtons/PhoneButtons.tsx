import React from "react";

const PhoneButtons = () => {
  return (
    <div className="flex flex-col relative z-10">
      <button
        className="fixed bottom-20 left-4 bg-red-700  hover:brightness-[80%]
       text-white font-bold py-2 px-4 w-60 h-12 rounded-[80px] flex flex-row items-center duration-300"
      >
        <svg
          className="fill-white text-white w-6 h-6 animate-shake"
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
        >
          <path
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 
          46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 
          38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 
          11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 
          18.4-30 11.6-46.3l-40-96z"
          />
        </svg>
        <p className=" text-[16px] ml-4">0545 484 11 18</p>
      </button>
      <button
        className="fixed bottom-4 left-4 bg-green-600  hover:brightness-[60%]
       text-white font-bold py-2 px-4 w-48 h-12 rounded-[80px] flex flex-row 
       items-center animate-pulse"
      >
        <svg
          className="fill-white text-white w-16 h-8 ml-[-20px] 
           duration-300"
          xmlns="http://www.w3.org/2000/svg "
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 
          365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 
          133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7
           0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4
            .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 
            9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 
            7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 
            11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 
            10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4
             2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1
              10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 
              1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 
              96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64
               64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 
               416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 
               223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 
               112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"
          />
        </svg>
        <p className="text-[18px]">WhatsApp</p>
      </button>
    </div>
  );
};
export default PhoneButtons;
