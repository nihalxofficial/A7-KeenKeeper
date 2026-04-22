import { LuMessageSquareMore, LuPhoneCall } from 'react-icons/lu';
import { PiVideoCameraLight } from 'react-icons/pi';
import { FaRegCalendarAlt, FaRegClock, FaRegComment, FaUserCheck } from 'react-icons/fa';
import { useState } from 'react';

const TimelineCard = ({ interact, isLast = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getProtocolIcon = () => {
        switch(interact.protocol) {
            case "text":
                return <LuMessageSquareMore className="text-xl text-emerald-400" />;
            case "call":
                return <LuPhoneCall className="text-xl text-blue-400" />;
            case "video":
                return <PiVideoCameraLight className="text-xl text-purple-400" />;
            default:
                return <LuMessageSquareMore className="text-xl text-gray-400" />;
        }
    };

    const getProtocolColor = () => {
        switch(interact.protocol) {
            case "text":
                return "border-l-emerald-500";
            case "call":
                return "border-l-blue-500";
            case "video":
                return "border-l-purple-500";
            default:
                return "border-l-gray-500";
        }
    };

    const getProtocolTextColor = () => {
        switch(interact.protocol) {
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

    const getProtocolBadgeColor = () => {
        switch(interact.protocol) {
            case "text":
                return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
            case "call":
                return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
            case "video":
                return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
            default:
                return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
        }
    };

    const getProtocolBackground = () => {
        switch(interact.protocol) {
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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            return "Today";
        } else if (diffDays === 1) {
            return "Yesterday";
        } else if (diffDays < 7) {
            return `${diffDays} days ago`;
        } else {
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
            });
        }
    };

    const formatTime = (timeString) => {
        if (!timeString) return null;
        // If time is already formatted, return as is
        if (timeString.includes(':') && (timeString.includes('AM') || timeString.includes('PM'))) {
            return timeString;
        }
        // Otherwise, try to format it
        try {
            const date = new Date(timeString);
            return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        } catch {
            return timeString;
        }
    };

    return (
        <div 
            className={`relative pl-8 pb-2 ${!isLast ? 'border-l-2 border-gray-700' : ''} ${getProtocolColor()} transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Timeline dot with pulse animation */}
            <div className="absolute left-0 top-0 -translate-x-1/2">
                <div className={`w-4 h-4 rounded-full bg-gray-800 border-2 ${isHovered ? 'border-emerald-400 animate-pulse' : 'border-emerald-400'} transition-all duration-300`}>
                    <div className={`absolute inset-0 rounded-full bg-emerald-400 opacity-0 ${isHovered ? 'animate-ping' : ''}`}></div>
                </div>
            </div>
            
            {/* Card content */}
            <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden ${isHovered ? 'transform scale-[1.02]' : ''}`}>
                <div className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                        <div className="flex items-center gap-4">
                            {/* Icon with animated background */}
                            <div className={`p-3 rounded-xl ${getProtocolBackground()} transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
                                {getProtocolIcon()}
                            </div>
                            
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h2 className="text-base md:text-lg font-semibold capitalize">
                                        <span className={getProtocolTextColor()}>
                                            {interact.protocol}
                                        </span>
                                    </h2>
                                    <span className="text-gray-500 text-sm">•</span>
                                    <div className="flex items-center gap-1">
                                        <FaUserCheck className="text-xs text-gray-500" />
                                        <span className="text-gray-300 font-medium text-sm">
                                            {interact.name}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                                    <div className="flex items-center gap-1.5">
                                        <FaRegCalendarAlt className="text-xs text-gray-500" />
                                        <p className="text-xs text-gray-400">
                                            {formatDate(interact.date)}
                                        </p>
                                    </div>
                                    {interact.time && (
                                        <div className="flex items-center gap-1.5">
                                            <FaRegClock className="text-xs text-gray-500" />
                                            <p className="text-xs text-gray-400">
                                                {formatTime(interact.time)}
                                            </p>
                                        </div>
                                    )}
                                    {interact.duration && (
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-xs text-gray-500">⏱</span>
                                            <p className="text-xs text-gray-400">
                                                {interact.duration}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Protocol badge */}
                        <div className="flex-shrink-0">
                            <span className={`${getProtocolBadgeColor()} rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
                                {interact.protocol}
                            </span>
                        </div>
                    </div>
                    
                    {/* Interaction details/message */}
                    {interact.details && (
                        <div className="mt-4 pt-3 border-t border-gray-700/50">
                            <div className="flex items-start gap-2">
                                <FaRegComment className="text-xs text-gray-500 mt-0.5" />
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {interact.details}
                                </p>
                            </div>
                        </div>
                    )}
                    
                    {/* Notes if available */}
                    {interact.notes && (
                        <div className="mt-2 ml-6">
                            <p className="text-xs text-gray-500 italic">
                                📝 {interact.notes}
                            </p>
                        </div>
                    )}
                    
                    {/* Hover animation indicator */}
                    <div className={`absolute right-4 top-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;