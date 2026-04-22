import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { PiVideoCameraLight } from "react-icons/pi";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";

const RecentInteractCard = ({ sui }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getProtocolIcon = () => {
        switch(sui.protocol) {
            case "text":
                return <LuMessageSquareMore className="text-xl md:text-2xl text-emerald-400" />;
            case "call":
                return <LuPhoneCall className="text-xl md:text-2xl text-blue-400" />;
            case "video":
                return <PiVideoCameraLight className="text-xl md:text-2xl text-purple-400" />;
            default:
                return <LuMessageSquareMore className="text-xl md:text-2xl text-gray-400" />;
        }
    };

    const getProtocolBackground = () => {
        switch(sui.protocol) {
            case "text":
                return "bg-emerald-500/10 group-hover:bg-emerald-500/20";
            case "call":
                return "bg-blue-500/10 group-hover:bg-blue-500/20";
            case "video":
                return "bg-purple-500/10 group-hover:bg-purple-500/20";
            default:
                return "bg-gray-500/10 group-hover:bg-gray-500/20";
        }
    };

    const getProtocolMessage = () => {
        switch(sui.protocol) {
            case "text":
                return sui.message || "Sent a message";
            case "call":
                return sui.message || "Had a phone conversation";
            case "video":
                return sui.message || "Had a video call";
            default:
                return sui.message || "Connected";
        }
    };

    const getProtocolColor = () => {
        switch(sui.protocol) {
            case "text":
                return "text-emerald-400";
            case "call":
                return "text-blue-400";
            case "video":
                return "text-purple-400";
            default:
                return "text-gray-400";
        }
    };

    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg mb-3 border border-gray-700 hover:border-gray-600 transition-all duration-200 overflow-hidden">
            <div 
                className="p-4 flex justify-between items-center gap-5 cursor-pointer hover:bg-gray-700/30 transition-all duration-200 group"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex justify-start items-center gap-3 flex-1 min-w-0">
                    <div className={`p-2 rounded-lg ${getProtocolBackground()} transition-colors duration-200 flex-shrink-0`}>
                        {getProtocolIcon()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className={`font-semibold capitalize ${getProtocolColor()} group-hover:brightness-110 transition-colors duration-200 truncate`}>
                            {sui.protocol}
                        </h2>
                        <p className="text-sm text-gray-400 truncate">
                            {getProtocolMessage()}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end flex-shrink-0">
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <FaRegCalendarAlt className="text-xs" />
                        <h2 className="text-sm whitespace-nowrap">
                            {formatDate(sui.date)}
                        </h2>
                    </div>
                    {sui.time && (
                        <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                            <FaRegClock className="text-xs" />
                            <p className="whitespace-nowrap">
                                {sui.time}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Expanded Content */}
            {isExpanded && (
                <div className="border-t border-gray-700 p-4 bg-gray-900/30">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">Interaction ID:</span>
                            <span className="text-xs text-gray-400">{sui.id || 'N/A'}</span>
                        </div>
                        {sui.notes && (
                            <div>
                                <span className="text-xs text-gray-500 block mb-1">Notes:</span>
                                <p className="text-sm text-gray-300">{sui.notes}</p>
                            </div>
                        )}
                        {sui.followUp && (
                            <div className="mt-2 pt-2 border-t border-gray-700">
                                <span className="text-xs text-emerald-400">Follow-up scheduled: {sui.followUp}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecentInteractCard;