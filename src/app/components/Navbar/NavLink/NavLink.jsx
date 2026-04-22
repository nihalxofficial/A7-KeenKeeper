"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, onClick }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    
    return (
        <li>
            <Link 
                href={href} 
                className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                    text-sm md:text-base
                    ${isActive 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }
                `}
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    );
};

export default NavLink;