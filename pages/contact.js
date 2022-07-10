import Head from "next/head";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import ContactContent from "./components/contactContent";
export default function Home() {
   return (
      <>
         <div className="bg-slate-100 overflow-y-hidden">
            <Navbar />
            <div className="max-w-[1000px] bg-slate-50 mx-auto pt-5 flex">
               <div className="flex-[2] m-2">
                  <Header />
                  <ContactContent />
               </div>
               <div className="flex-[1] m-2">
                  <Sidebar />
               </div>
            </div>
         </div>
      </>
   );
}
