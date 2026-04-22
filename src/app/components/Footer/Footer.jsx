import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const socialLinks = [
        { icon: FaInstagramSquare, href: "https://www.instagram.com/", label: "Instagram" },
        { icon: FaFacebookSquare, href: "https://www.facebook.com/", label: "Facebook" },
        { icon: FaXTwitter, href: "https://x.com/", label: "Twitter" },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-center pt-16 pb-8 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Keen<span className="text-emerald-400">Keeper</span>
                </h2>
                <p className="w-full md:w-[70%] mx-auto text-sm md:text-base text-gray-300 mb-8">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                
                <div className="mb-12">
                    <h4 className="mb-4 text-gray-300 font-medium uppercase text-sm tracking-wide">Connect With Us</h4>
                    <ul className="flex justify-center items-center gap-4 mb-10">
                        {socialLinks.map((social, index) => (
                            <li key={index}>
                                <Link 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-emerald-600 rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-6 text-xs md:text-sm text-gray-400 border-t border-gray-700">
                    <p>
                        &copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.
                    </p>
                    <ul className="flex justify-between items-center gap-6">
                        <li>
                            <Link href="#" className="hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4">
                                Cookies
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;