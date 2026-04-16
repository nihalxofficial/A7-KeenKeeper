
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTimer } from "react-icons/io";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
    
    
    return (
        <nav className="bg-white shadow-sm py-7">
            <div className="w-10/12 mx-auto flex justify-between items-center gap-4">
                <h2 className="font-bold text-2xl">Keen<span className="text-[#244d3f]">Keeper</span></h2>
                <ul className="flex justify-between items-center gap-5 text-[#64748B]">
                    {/* <li><Link href="/" className="flex justify-between items-center gap-1"> <FaHome />Home</Link></li>
                    <li><Link href="/timeline" className="flex justify-between items-center gap-1"><IoIosTimer />Timeline</Link></li>
                    <li><Link href="/stats" className="flex justify-between items-center gap-1"><ImStatsDots />Stats</Link></li> */}
                    <NavLink href="/"><FaHome />Home</NavLink>
                    <NavLink href="/timeline"><IoMdTimer />Timeline</NavLink>
                    <NavLink href="/stats"><ImStatsDots />Stats</NavLink>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;