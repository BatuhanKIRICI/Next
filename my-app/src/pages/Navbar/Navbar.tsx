import Image from "next/image";
import { navbarInfo, navbarMenuInfo } from "./navbarInfo";


const CollapseIcon = () => {
  return (
    <svg
      className="w-2.5 h-2.5 ms-3 transition-transform transform group-hover:rotate-180 duration-300"
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
  );
};

interface IDropdown {
  options: {
    route: string;
    title: string;
  }[];
}
const Dropdown = ({ options }: IDropdown) => {
  const handleNavigation = (path: string) => {
    console.log("path", path);
  };
  return (
    <div
      className="bg-gray-800 gap-2 hidden  text-gray-400 absolute top-16 flex 
    flex-col items-start rounded-md p-3 w-[200px]  group-hover:flex"
    >
      {options.map((option, i) => (
        <div
          key={i}
          className="w-full hover:text-white cursor-pointer 
    rounded-r-lg z-50"
        >
          <p
            onClick={() => handleNavigation(option.route)}
            className="text-left"
          >
            {option.title}
          </p>
        </div>
      ))}
    </div>
  );
};
export interface INavbarItemWithMenu extends IDropdown {
  title: string;
}
const NavbarItemWithMenu = ({ title, options }: INavbarItemWithMenu) => {
  return (
    <div
      className="group flex text-black bg-white focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-md px-5 py-2.5 text-center 
          hidden lg:flex justify-between items-center duration-300 cursor-pointer"
    >
      <p>{title}</p>
      <CollapseIcon />
      <Dropdown options={options} />
    </div>
  );
};

const Navbar: React.FC = () => {


  return (
    <nav
      className="bg-white sticky flex flex-row justify-around md:justify-center 
    mr-12 top-0 items-center pr-12 gap-x-2 sm:pr-20 sm:gap-x-5 md:pr-14 
    lg:pr-4 xl:pr-7 2xl:pr-6 md:gap-x-12 lg:gap-x-1 xl:gap-x-1.5 2xl:gap-x-10 
    z-50 h-20 w-full"
    >
      {/* <Link href="/"> */}

      <div
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

      {navbarMenuInfo.map((item, i) => (
        <NavbarItemWithMenu key={i} {...item} />
      ))}

 
  
      {/* <Link> */}
      {navbarInfo.map((item, index) => {
        return item.id > 3 ? (
          <button
            key={index}
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
