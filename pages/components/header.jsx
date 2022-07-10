import SearchBar from "./searchbar";

export default function Header() {
   return (
      <>
         <div>
            <div className="py-2 ml-5">
               <h1 className="font-bold text-5xl text-gray-500">SoftAing</h1>
               <blockquote className="mt-1 italic indent-2 text-gray-400">
                  &quot; Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Nulla, tempore. &quot;
               </blockquote>
            </div>
            <SearchBar />
         </div>
      </>
   );
}
