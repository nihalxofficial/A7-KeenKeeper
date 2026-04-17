import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { PiVideoCameraLight } from "react-icons/pi";

const RecentInteractCard = () => {
    return (
        <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center gap-5">
            <div className="flex justify-start items-center gap-2">
                <div>
                    <LuMessageSquareMore className="text-3xl font-extrabold"/>
                </div>
                <div>
                    <h2 className="font-semibold">Text</h2>
                    <p className="text-sm text-gray-600">Asked for career advice</p>
                </div>

            </div>
            <div>
                <h2 className="text-sm text-gray-600">Jan 28, 2026</h2>
            </div>
            
        </div>
    );
};

export default RecentInteractCard;