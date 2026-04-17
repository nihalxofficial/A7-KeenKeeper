"use client"

import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTimer } from "react-icons/io";
import NavLink from "./NavLink/NavLink";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="bg-white shadow border-b border-gray-200 py-7 sticky top-0 z-50">
                <div className="w-10/12 mx-auto flex justify-between items-center gap-4">
                    <div className="flex justify-start items-center gap-7">
                        <GiHamburgerMenu 
                            className="md:hidden text-xl cursor-pointer" 
                            onClick={toggleMenu}
                        />

                        <Link href="/" className="font-bold text-2xl md:text-3xl">Keen<span className="text-[#244d3f]">Keeper</span></Link>
                    </div>
                    <ul className="hidden md:flex justify-between items-center gap-5 text-sm md:text-md text-[#64748B]">
                        <NavLink href="/"><FaHome />Home</NavLink>
                        <NavLink href="/timeline"><IoMdTimer />Timeline</NavLink>
                        <NavLink href="/stats"><ImStatsDots />Stats</NavLink>
                    </ul>
                </div>
            </nav>

                <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <Link href="/" className="font-bold text-2xl" onClick={closeMenu}>Keen<span className="text-[#244d3f]">Keeper</span></Link>
                        <IoClose 
                            className="text-2xl cursor-pointer text-gray-600 hover:text-gray-900" 
                            onClick={toggleMenu}
                        />
                    </div>
                    <ul className="flex flex-col p-4 gap-3">
                        <NavLink href="/" onClick={closeMenu}><FaHome />Home</NavLink>
                        <NavLink href="/timeline" onClick={closeMenu}><IoMdTimer />Timeline</NavLink>
                        <NavLink href="/stats" onClick={closeMenu}><ImStatsDots />Stats</NavLink>
                    </ul>
                </div>
        </>
    );
};

export default Navbar;