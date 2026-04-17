import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { PiVideoCameraLight } from "react-icons/pi";

const RecentInteractCard = ({sui}) => {
    return (
        <div className="bg-white p-4 border-b border-gray-200 flex justify-between items-center gap-5">
            <div className="flex justify-start items-center gap-2">
                <div>
                    {sui.protocol==="text"? <LuMessageSquareMore className="text-3xl font-extrabold"/> :
                    sui.protocol === "call"? <LuPhoneCall className="text-3xl font-extrabold"/> :
                    <PiVideoCameraLight className="text-3xl font-extrabold"/>}
                    
                </div>
                <div>
                    <h2 className="font-semibold capitalize">{sui.protocol}</h2>
                    <p className="text-sm text-gray-600">{sui.protocol === "text" || sui.protocol ==="video"? "Asked for career advice" : "Industry conference meetup"}</p>
                </div>

            </div>
            <div>
                <h2 className="text-sm text-gray-600">{sui.date}</h2>
            </div>
            
        </div>
    );
};

export default RecentInteractCard;