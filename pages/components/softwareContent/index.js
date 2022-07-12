import Head from "next/head";
import Header from "../header";
import Sidebar from "../sidebar";
import Content from "./softContent";
import Navbar from "../navbar";
import { useState } from "react";
import HamburgerButton from "../hamburger";

export default function Home() {
   const [menu, setMenu] = useState(true);
   const handleMenu = () => {
      menu ? setMenu(false) : setMenu(true);
   };

   return (
      <>
         <div className="bg-slate-100 overflow-y-hidden">
            <Navbar />
            <span
               onClick={handleMenu}
               className="sm:hidden cursor-pointer fixed z-10 right-0 bottom-0 mr-10 mb-10"
            >
               <HamburgerButton aktif={menu} />
            </span>
            <div className="max-w-[1000px] bg-slate-50 mx-auto pt-5 flex flex-col sm:flex-row">
               <div className="order-2 sm:order-1 flex-[2] m-2">
                  <span
                     className={`bg-black fixed inset-0 ${
                        menu ? "hidden opacity-0" : "block opacity-30"
                     }`}
                  ></span>
                  <Header />
                  <Content />
               </div>
               <div
                  className={`transition-all sm:transition-none p-5 sm:p-0 order-1 sm:order-2 flex-[1] sm:m-2 sm:static fixed z-10 top-0 bottom-0 ${
                     menu ? "-left-1/2" : "left-0"
                  }  bg-gray-50 sm:bg-white w-1/2`}
               >
                  <Sidebar />
               </div>
            </div>
         </div>
      </>
   );
}
