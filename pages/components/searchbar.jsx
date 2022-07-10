export default function SearchBar() {
   return (
      <>
         <div className="">
            <form action="#" method="post" id="seachbar" className="h-10 flex">
               <input
                  type="text"
                  name="search"
                  placeholder="Search.."
                  className="border-2 flex-[2] h-full mx-2 indent-3 focus:outline-none focus:border-gray-300 max-w-1/2"
               />
               <button
                  type="submit"
                  name="searchbar"
                  className="border-2 flex-1 max-w-[100px] bg-slate-300 h-full px-4 text-white border-slate-400 font-medium"
               >
                  Submit
               </button>
            </form>
         </div>
      </>
   );
}
