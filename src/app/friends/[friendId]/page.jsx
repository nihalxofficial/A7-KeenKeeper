"use client"
import Image from "next/image";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { PiVideoCameraLight } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import RecentInteractCard from "@/app/components/RecentInteractCard/RecentInteractCard";
import { useParams } from "next/navigation";
import useFriends from "@/app/hooks/useFriends";
import { useContext } from "react";
import { InteractionContext } from "@/app/context/interactionContext";
import { toast } from "react-toastify";
import Spinner from "@/app/components/Spinner/Spinner";

const FriendDetailsPage = () => {
    const { friendId } = useParams();
    const { friends, loading } = useFriends();
    const currentFriend = friends.find(friend => friend.id === Number(friendId));
    const { interactions, handleInteraction } = useContext(InteractionContext);
    const status = currentFriend?.status;

    const singleUserInteractions = interactions.filter(itr => itr.id === Number(friendId));

    const handleText = () => {
        handleInteraction(currentFriend?.id, currentFriend?.name, "text");
        toast.success(`Text with ${currentFriend?.name}`);
    };
    const handleAudio = () => {
        handleInteraction(currentFriend?.id, currentFriend?.name, "call");
        toast.success(`Call with ${currentFriend?.name}`);
    };
    const handleVideo = () => {
        handleInteraction(currentFriend?.id, currentFriend?.name, "video");
        toast.success(`Video with ${currentFriend?.name}`);
    };

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

    if (loading) {
        return (
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20">
                <Spinner />
            </div>
        );
    }

    if (!currentFriend) {
        return (
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20">
                <div className="w-9/12 mx-auto text-center">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-12 border border-gray-700">
                        <h2 className="text-2xl text-white mb-4">Friend not found</h2>
                        <p className="text-gray-400">The friend you're looking for doesn't exist or has been removed.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20">
            <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Profile Info */}
                <div className="space-y-5">
                    {/* Profile Card */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-6 text-center space-y-3 border border-gray-700">
                        <div className="flex justify-center items-center">
                            <div className="relative">
                                <Image
                                    src={currentFriend?.picture}
                                    alt={currentFriend?.name}
                                    height={600}
                                    width={600}
                                    className="rounded-full h-24 w-24 object-cover border-2 border-gray-600"
                                />
                                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${
                                    status === "on-track" ? "bg-emerald-400" : 
                                    status === "almost due" ? "bg-orange-400" : 
                                    status === "overdue" ? "bg-red-400" : "bg-gray-400"
                                } border-2 border-gray-800`}></div>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-white">{currentFriend?.name}</h2>
                        <div className="flex justify-center items-center gap-2">
                            <span className={`${getStatusStyles(status)} rounded-full py-1.5 px-4 text-sm font-semibold capitalize`}>
                                {status}
                            </span>
                        </div>
                        <div className="flex justify-center items-center gap-2 flex-wrap">
                            {currentFriend?.tags.map((tag, idx) => (
                                <span key={idx} className={`${getTagStyles(tag)} py-1 px-3 rounded-full uppercase text-xs font-semibold`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-gray-300 italic">&quot;{currentFriend?.bio}&quot;</h2>
                        <p className="text-sm text-gray-400">Preferred: {currentFriend?.email}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg text-center py-3 font-semibold cursor-pointer border border-gray-700 hover:border-emerald-500/50 transition-all duration-200 hover:bg-gray-700/50">
                        <h2 className="flex justify-center items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
                            <RiNotificationSnoozeLine className="text-lg" />
                            Snooze 2 weeks
                        </h2>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg text-center py-3 font-semibold cursor-pointer border border-gray-700 hover:border-emerald-500/50 transition-all duration-200 hover:bg-gray-700/50">
                        <h2 className="flex justify-center items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
                            <FiArchive className="text-lg" />
                            Archive
                        </h2>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg text-center py-3 font-semibold cursor-pointer border border-gray-700 hover:border-red-500/50 transition-all duration-200 hover:bg-red-500/10">
                        <h2 className="flex justify-center items-center gap-2 text-red-400">
                            <RiDeleteBin6Line className="text-lg" />
                            Delete
                        </h2>
                    </div>
                </div>

                {/* Right Column - Details and Actions */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="rounded-xl shadow-lg bg-gray-800/50 backdrop-blur-sm p-5 text-center border border-gray-700">
                            <h2 className="text-3xl font-bold text-emerald-400 mb-2">{currentFriend?.days_since_contact}</h2>
                            <p className="text-gray-300 text-sm">Days Since Contact</p>
                        </div>
                        <div className="rounded-xl shadow-lg bg-gray-800/50 backdrop-blur-sm p-5 text-center border border-gray-700">
                            <h2 className="text-3xl font-bold text-emerald-400 mb-2">{currentFriend?.goal}</h2>
                            <p className="text-gray-300 text-sm">Goal (Days)</p>
                        </div>
                        <div className="rounded-xl shadow-lg bg-gray-800/50 backdrop-blur-sm p-5 text-center border border-gray-700">
                            <h2 className="text-xl font-bold text-emerald-400 mb-2">{currentFriend?.next_due_date}</h2>
                            <p className="text-gray-300 text-sm">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="rounded-xl shadow-lg bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700">
                        <div className="flex justify-between items-center gap-5 mb-3">
                            <h2 className="font-semibold text-white">Relationship Goal</h2>
                            <button className="px-4 cursor-pointer py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-200 text-sm font-medium">
                                Edit
                            </button>
                        </div>
                        <h2 className="text-gray-300">
                            Connect every <span className="font-extrabold text-emerald-400">{currentFriend?.goal} days</span>
                        </h2>
                    </div>

                    {/* Quick Check-In */}
                    <div className="rounded-xl shadow-lg bg-gray-800/50 backdrop-blur-sm p-6 space-y-4 border border-gray-700">
                        <h2 className="font-semibold text-white">Quick Check-In</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button onClick={handleAudio} className="group cursor-pointer bg-gray-700/50 hover:bg-emerald-600/20 text-center rounded-lg p-4 transition-all duration-200 border border-gray-600 hover:border-emerald-500">
                                <div className="flex justify-center items-center">
                                    <LuPhoneCall className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h2 className="text-sm font-medium text-gray-300 group-hover:text-emerald-400 mt-2">Call</h2>
                            </button>
                            <button onClick={handleText} className="group cursor-pointer bg-gray-700/50 hover:bg-emerald-600/20 text-center rounded-lg p-4 transition-all duration-200 border border-gray-600 hover:border-emerald-500">
                                <div className="flex justify-center items-center">
                                    <LuMessageSquareMore className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h2 className="text-sm font-medium text-gray-300 group-hover:text-emerald-400 mt-2">Text</h2>
                            </button>
                            <button onClick={handleVideo} className="group cursor-pointer bg-gray-700/50 hover:bg-emerald-600/20 text-center rounded-lg p-4 transition-all duration-200 border border-gray-600 hover:border-emerald-500">
                                <div className="flex justify-center items-center">
                                    <PiVideoCameraLight className="text-3xl text-gray-400 group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h2 className="text-sm font-medium text-gray-300 group-hover:text-emerald-400 mt-2">Video</h2>
                            </button>
                        </div>
                    </div>

                    {/* Recent Interactions */}
                    <div className="rounded-xl shadow-lg bg-gray-800/50 backdrop-blur-sm pt-5 px-5 pb-2 space-y-4 border border-gray-700">
                        <div className="flex justify-between items-center gap-5">
                            <h2 className="font-semibold text-white">Recent Interactions</h2>
                            <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-all duration-200 text-sm font-medium">
                                <FaHistory />
                                Full History
                            </button>
                        </div>
                        {singleUserInteractions.length <= 0 ? (
                            <div className="p-10 flex justify-center items-center">
                                <div className="text-center">
                                    <h2 className="text-gray-400">No Recent Interactions Yet...</h2>
                                    <p className="text-gray-500 text-sm mt-2">Start connecting with {currentFriend?.name} using the buttons above</p>
                                </div>
                            </div>
                        ) : (
                            singleUserInteractions.map((sui, idx) => <RecentInteractCard key={idx} sui={sui} />)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;