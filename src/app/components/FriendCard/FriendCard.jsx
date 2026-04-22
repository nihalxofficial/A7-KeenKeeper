import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
    const { id, name, picture, days_since_contact, status, tags } = friend;
    
    const getStatusStyles = (status) => {
        switch(status) {
            case "on-track":
                return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
            case "almost due":
                return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
            case "overdue":
                return "bg-red-500/20 text-red-400 border border-red-500/30";
            default:
                return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
        }
    };
    
    const getTagStyles = (tag) => {
        const tagColors = {
            family: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
            friend: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
            work: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
            colleague: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
            close: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
        };
        return tagColors[tag?.toLowerCase()] || "bg-gray-500/10 text-gray-400 border border-gray-500/20";
    };
    
    return (
        <Link href={`/friends/${id}`} className="block bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center space-y-3 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <Image
                        src={picture}
                        alt={name}
                        height={600}
                        width={600}
                        className="rounded-full h-20 w-20 object-cover border-2 border-gray-600 group-hover:border-emerald-400 transition-all duration-300"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${
                        status === "on-track" ? "bg-emerald-400" : 
                        status === "almost due" ? "bg-orange-400" : 
                        status === "overdue" ? "bg-red-400" : "bg-gray-400"
                    } border-2 border-gray-800`}></div>
                </div>
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                {name}
            </h2>
            <p className="text-sm text-gray-400">
                {days_since_contact} days ago
            </p>
            <div className="flex justify-center items-center gap-2 flex-wrap">
                {tags?.map((tag, idx) => (
                    <span key={idx} className={`${getTagStyles(tag)} py-1 px-3 rounded-full uppercase text-xs font-semibold`}>
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-center items-center gap-2">
                <span className={`${getStatusStyles(status)} rounded-full py-1.5 px-4 text-xs font-semibold capitalize`}>
                    {status}
                </span>
            </div>
        </Link>
    );
};

export default FriendCard;