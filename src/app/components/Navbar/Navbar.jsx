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
            <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700 py-6 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
                <div className="w-10/12 mx-auto flex justify-between items-center gap-4">
                    <div className="flex justify-start items-center gap-7">
                        <GiHamburgerMenu 
                            className="md:hidden text-2xl cursor-pointer text-gray-300 hover:text-white transition-colors duration-200" 
                            onClick={toggleMenu}
                        />

                        <Link href="/" className="font-bold text-2xl md:text-3xl text-white hover:text-gray-200 transition-colors duration-200">
                            Keen<span className="text-emerald-400">Keeper</span>
                        </Link>
                    </div>
                    <ul className="hidden md:flex justify-between items-center gap-6 text-sm md:text-base">
                        <NavLink href="/"><FaHome />Home</NavLink>
                        <NavLink href="/timeline"><IoMdTimer />Timeline</NavLink>
                        <NavLink href="/stats"><ImStatsDots />Stats</NavLink>
                    </ul>
                </div>
            </nav>

            <div className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-5 border-b border-gray-700 flex justify-between items-center">
                    <Link href="/" className="font-bold text-2xl text-white" onClick={closeMenu}>
                        Keen<span className="text-emerald-400">Keeper</span>
                    </Link>
                    <IoClose 
                        className="text-2xl cursor-pointer text-gray-400 hover:text-white transition-colors duration-200" 
                        onClick={toggleMenu}
                    />
                </div>
                <ul className="flex flex-col p-5 gap-4">
                    <NavLink href="/" onClick={closeMenu}><FaHome />Home</NavLink>
                    <NavLink href="/timeline" onClick={closeMenu}><IoMdTimer />Timeline</NavLink>
                    <NavLink href="/stats" onClick={closeMenu}><ImStatsDots />Stats</NavLink>
                </ul>
            </div>

            {/* Overlay when menu is open */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
                    onClick={closeMenu}
                />
            )}
        </>
    );
};

export default Navbar;