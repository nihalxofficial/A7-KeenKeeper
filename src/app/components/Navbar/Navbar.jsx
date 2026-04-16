import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTimer } from "react-icons/io";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
    
    
    return (
        <nav className="bg-white shadow border-b border-gray-200 py-7">
            <div className="w-10/12 mx-auto flex justify-between items-center gap-4">
                <h2 className="font-bold text-xl md:text-2xl">Keen<span className="text-[#244d3f]">Keeper</span></h2>
                <ul className="flex justify-between items-center gap-5 text-sm md:text-md text-[#64748B]">
                    <NavLink href="/"><FaHome />Home</NavLink>
                    <NavLink href="/timeline"><IoMdTimer />Timeline</NavLink>
                    <NavLink href="/stats"><ImStatsDots />Stats</NavLink>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;