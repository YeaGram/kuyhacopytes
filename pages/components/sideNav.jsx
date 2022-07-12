import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
export default function SideNavbar(props) {
   const [toggle, setToggle] = useState(true);
   const handleToggler = () => {
      toggle ? setToggle(false) : setToggle(true);
      // console.log(toggle);
   };
   return (
      <div className="my-1 ml-3 relative overflow-hidden h-full w-full">
         <div className="flex items-end py-1">
            <p
               className="text-xl z-20 relative block text-gray-500 transition-all transform hover:scale-110 hover:text-teal-500 origin-left"
               onClick={handleToggler}
            >
               {props.title}
            </p>
            <span
               className={`block ${
                  !toggle ? "-rotate-180" : "-rotate-0"
               } transform font-bold text-gray-500 text-xl transition-all ml-3 hover:text-teal-500 hover:scale-110`}
               onClick={handleToggler}
            >
               <MdExpandMore />
            </span>
         </div>
         <div
            className={`transition-all h-0 flex items-center overflow-hidden ${
               toggle ? "py-0" : "py-10"
            }`}
         >
            <div
               className={`transition-all flex flex-col indent-4 text-gray-400`}
               id="kategori"
            >
               <Link href="/components/softwareContent">
                  <a className="cursor-pointer">{props.kateOne}</a>
               </Link>
               <Link href="/components/softwareContent">
                  <a className="cursor-pointer">{props.kateTwo}</a>
               </Link>
               <Link href="/components/softwareContent">
                  <a className="cursor-pointer">{props.kateThree}</a>
               </Link>
            </div>
         </div>
      </div>
   );
}
