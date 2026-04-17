import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#244d3f] text-center pt-15 text-white pb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Keen<span className="font-semibold">Keeper</span></h2>
            <p className="w-[80%] mx-auto text-sm text-gray-300 mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div>
                <h4 className="mb-4">Social Links</h4>
                <ul className="flex justify-center items-center gap-3 text-black mb-10">
                    <li className="bg-white rounded-full p-2"><Link href="https://www.instagram.com/"><FaInstagramSquare /></Link></li>
                    <li className="bg-white rounded-full p-2"><Link href="https://www.facebook.com/"><FaFacebookSquare /></Link></li>
                    <li className="bg-white rounded-full p-2"><Link href="https://x.com/"><FaXTwitter /></Link></li>
                </ul>
            </div>
            <div className="w-8/12 mx-auto flex flex-col md:flex-row  justify-between items-center gap-4 pt-4 text-sm text-gray-400 border-t border-gray-600">
                <h2>
                    &copy; 2026 KeenKeeper. All rights reserved.
                </h2>
                <ul className="flex justify-between items-center gap-8">
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Terms of Service</Link></li>
                    <li><Link href="#">Cookies</Link></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Footer;