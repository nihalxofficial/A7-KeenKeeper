import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTimer } from "react-icons/io";
import NavLink from "./NavLink/NavLink";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    
    return (
        <nav className="bg-white shadow border-b border-gray-200 py-7">
            <div className="w-10/12 mx-auto flex justify-between items-center gap-4">
                <div className="flex justify-start items-center gap-7">
                    <GiHamburgerMenu className="md:hidden text-xl cursor-pointer"/>

                    <Link href="/" className="font-bold text-2xl md:text-3xl">Keen<span className="text-[#244d3f]">Keeper</span></Link>
                </div>
                <ul className="hidden md:flex justify-between items-center gap-5 text-sm md:text-md text-[#64748B]">
                    <NavLink href="/"><FaHome />Home</NavLink>
                    <NavLink href="/timeline"><IoMdTimer />Timeline</NavLink>
                    <NavLink href="/stats"><ImStatsDots />Stats</NavLink>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;