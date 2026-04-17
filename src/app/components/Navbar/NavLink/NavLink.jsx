"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
    const pathName = usePathname()
    const isActive = pathName === href
    return (
        <li><Link href={href} className={`flex justify-between items-center gap-1 ${isActive? "bg-[#244d3f] text-white px-3 py-1.5 rounded": ""}`}>{children}</Link></li>

    );
};

export default NavLink;