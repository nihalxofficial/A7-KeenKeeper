import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <div className="bg-[#f8fafc] h-[80vh] flex justify-center items-center">
            <div className="text-center space-y-3">
                <h2 className="text-7xl text-[#244d3f] font-extrabold">404</h2>
                <h2 className="capitalize text-[#244d3f] font-bold text-xl">Page not found</h2>
                <p className="text-sm text-gray-600">Looks like this friendship link is broken. The page <br /> you are looking for doesn&apos;t exist or have been moved</p>
                <div className="flex justify-center ">
                    <Link href="/" className="btn bg-[#244d3f] text-white flex justify-center items-center gap-2"><FaHome />Back to Home</Link>
                </div>
            </div>
            
        </div>
    );
};

export default NotFoundPage;