"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children, onClick}) => {
    const pathName = usePathname()
    const isActive = pathName === href
    return (
        <li><Link 
            href={href} 
            className={`flex justify-between items-center gap-1 text-sm md:text-[16px] ${isActive? "bg-[#244d3f] text-white px-3 py-1.5 rounded": ""}`}
            onClick={onClick}
        >{children}</Link></li>
    );
};

export default NavLink;