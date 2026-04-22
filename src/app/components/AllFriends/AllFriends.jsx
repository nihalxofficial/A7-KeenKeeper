"use client"
import useFriends from "@/app/hooks/useFriends";
import FriendCard from "../FriendCard/FriendCard";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import { FaSearch, FaUserFriends } from "react-icons/fa";

const AllFriends = () => {
    const { friends, loading } = useFriends();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    
    const filteredFriends = friends.filter(friend => {
        const matchesSearch = friend.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             friend.relationship?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || friend.status === filterStatus;
        return matchesSearch && matchesStatus;
    });
    
    const statusCounts = {
        all: friends.length,
        "on-track": friends.filter(f => f.status === "on-track").length,
        "need-attention": friends.filter(f => f.status === "need-attention" || f.status === "off-track").length,
    };
    
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 pt-12 pb-20 min-h-screen">
            <div className="w-10/12 mx-auto">
                <div className="mb-8">
                    <h2 className="font-bold text-3xl md:text-4xl text-white mb-2 flex items-center gap-3">
                        <FaUserFriends className="text-emerald-400" />
                        Your Friends
                    </h2>
                    <p className="text-gray-300 text-sm">
                        Manage and nurture your meaningful connections • {friends.length} friends total
                    </p>
                </div>
                
                {/* Search and Filter Section */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full sm:w-96">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search friends..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>
                    
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilterStatus("all")}
                            className={`px-4 cursor-pointer py-2 rounded-lg transition-all duration-200 ${
                                filterStatus === "all" 
                                    ? "bg-emerald-600 text-white" 
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            All ({statusCounts.all})
                        </button>
                        <button
                            onClick={() => setFilterStatus("on-track")}
                            className={`px-4 cursor-pointer py-2 rounded-lg transition-all duration-200 ${
                                filterStatus === "on-track" 
                                    ? "bg-emerald-600 text-white" 
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            On Track ({statusCounts["on-track"]})
                        </button>
                        <button
                            onClick={() => setFilterStatus("need-attention")}
                            className={`px-4 cursor-pointer py-2 rounded-lg transition-all duration-200 ${
                                filterStatus === "need-attention" 
                                    ? "bg-orange-600 text-white" 
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            Need Attention ({statusCounts["need-attention"]})
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <Spinner />
                    </div>
                ) : filteredFriends.length === 0 ? (
                    <div className="text-center py-16 bg-gray-800/30 rounded-xl border border-gray-700">
                        <p className="text-gray-300 text-lg mb-4">No friends found</p>
                        <p className="text-gray-400 text-sm">
                            {searchTerm ? "Try adjusting your search" : "Start adding friends to build your connection network"}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
                        {filteredFriends.map(friend => (
                            <div key={friend.id} className="transform transition-all duration-300 hover:scale-105">
                                <FriendCard friend={friend} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default AllFriends;