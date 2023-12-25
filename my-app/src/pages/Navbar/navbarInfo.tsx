import React from "react";
import { INavbarItemWithMenu } from "./Navbar";

export interface INavbarProps {
  id: number;
  class: string;
  content: string;
}

export const navbarMenuInfo:INavbarItemWithMenu[]=[
  {title:"Kurumsal",options:[
    {title:"Hakkimizda",route:"/hakkimizda"}
  ]},
  {title:"Bayiler",options:[
    {title:"Cukurova su bayileri",route:"/cukurova"},
    {title:"Yüregir su bayileri",route:"/yüregir"},
    {title:"Kozan su bayileri",route:"/kozan"}
  ]},

]

export const navbarInfo = [
  {
    id: 0,
    class: (
      <p>
        hidden lg:flex text-black bg-white focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-md px-5 py-2.5 text-center items-center
        dark:bg-white dark:hover:text-white dark:hover:bg-blue-700
        dark:focus:ring-blue-800 hover:-translate-y-1 hover:bg-blue-500
        duration-300
      </p>
    ),
    content: <p>ANASAYFA</p>,
  },
  {
    id: 1,
    class: (
      <p>
        hidden lg:flex text-black bg-white focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-md px-5 py-2.5 text-center items-center
        dark:bg-white dark:hover:text-white dark:hover:bg-blue-700
        dark:focus:ring-blue-800 hover:-translate-y-1 hover:bg-blue-500
        duration-300
      </p>
    ),
    content: <p>KURUMSAL</p>,
  },
  {
    id: 2,
    class: (
      <p>
        hidden lg:flex text-black bg-white focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-md px-5 py-2.5 text-center items-center
        dark:bg-white dark:hover:text-white dark:hover:bg-blue-700
        dark:focus:ring-blue-800 hover:-translate-y-1 hover:bg-blue-500
        duration-300
      </p>
    ),
    content: <p>BAYİLER</p>,
  },
  {
    id: 3,
    class: (
      <p>
        hidden lg:flex text-black bg-white focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-md px-5 py-2.5 text-center items-center
        dark:bg-white dark:hover:text-white dark:hover:bg-blue-700
        dark:focus:ring-blue-800 hover:-translate-y-1 hover:bg-blue-500
        duration-300
      </p>
    ),
    content: <p>ÜRÜNLER</p>,
  },
  {
    id: 4,
    class: (
      <p>
        hidden lg:flex text-black bg-white focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-md px-5 py-2.5 text-center items-center
        dark:bg-white dark:hover:text-white dark:hover:bg-blue-700
        dark:focus:ring-blue-800 hover:-translate-y-1 hover:bg-blue-500
        duration-300
      </p>
    ),
    content: <p>HİZMET BÖLGELERİ</p>,
  },
  {
    id: 5,
    class: (
      <p>
        hidden lg:flex text-black bg-white focus:ring-4 focus:ring-blue-300
        font-medium rounded-lg text-md px-5 py-2.5 text-center items-center
        dark:bg-white dark:hover:text-white dark:hover:bg-blue-700
        dark:focus:ring-blue-800 hover:-translate-y-1 hover:bg-blue-500
        duration-300
      </p>
    ),
    content: <p>İLETİŞİM</p>,
  },
];
