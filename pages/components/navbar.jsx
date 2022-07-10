import { GiCoffeeCup } from "react-icons/gi";
export default function Navbar() {
   return (
      <div className="w-full flex justify-between py-3 bg-gray-200 text-stone-600">
         <span>
            <a href="#" className="ml-10">
               SoftAing
            </a>
         </span>
         <div className="w-1/4 max-w-sm flex justify-evenly font-bold">
            <a href="#" className="flex items-center hover:text-teal-500">
               Buy Me A Coffe :D
               <span className="text-2xl mx-2">
                  <GiCoffeeCup />
               </span>
            </a>
         </div>
      </div>
   );
}
