import SideNavbar from "./sideNav";
import Link from "next/link";
export default function Sidebar() {
   return (
      <div className="flex flex-col" id="sideBar">
         <Link href="/">
            <a className="text-xl block text-gray-500 w-full text-center bg-gray-100 my-1 py-1 pageSelected">
               Home
            </a>
         </Link>

         <SideNavbar
            title="Trending"
            kateOne="trending1"
            kateTwo="trending2"
            kateThree="trending3"
            link1="/components/softwareContent"
            link2="/components/softwareContent"
            link3="/components/softwareContent"
         />
         <SideNavbar
            title="Category"
            kateOne="Operating System"
            kateTwo="Multimedia"
            kateThree="Editing"
            link1="/components/softwareContent"
            link2="/components/softwareContent"
            link3="/components/softwareContent"
         />
         <SideNavbar
            title="Terbaru"
            kateOne="terbaru1"
            kateTwo="terbaru2"
            kateThree="terbaru3"
            link1="/components/softwareContent"
            link2="/components/softwareContent"
            link3="/components/softwareContent"
         />

         <Link href="/about">
            <a className="text-xl block text-gray-500 w-full text-center bg-gray-100 my-1 py-1 ">
               About
            </a>
         </Link>
         <Link href="/contact">
            <a className="text-xl block text-gray-500  w-full text-center bg-gray-100 my-1 py-1">
               Contact
            </a>
         </Link>
      </div>
   );
}
