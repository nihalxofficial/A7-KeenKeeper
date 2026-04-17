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

const FriendDetailsPage = () => {
    const {friendId} = useParams()
    
    const {friends, loading} = useFriends()

    const currentFriend = friends.find(friend=> friend.id === Number(friendId))
    const {interactions, handleInteraction} = useContext(InteractionContext)
    const status = currentFriend?.status

    const singleUserInteractions = interactions.filter(itr => itr.id === Number(friendId))
    
    
    
    
    return (
        <div className="bg-[#f8fafc] py-20">
            <div className="w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                    <div className="bg-white rounded-md shadow-sm p-5 text-center space-y-2 ">
                        <div className="flex justify-center items-center">
                                <Image src={currentFriend?.picture}
                                alt="Friend"
                                height={600}
                                width={600}
                                className="rounded-full h-20 w-20 object-cover"></Image>
                        </div>
                        <h2 className="text-2xl font-bold ">{currentFriend?.name}</h2>
                        <div className="flex justify-center items-center gap-2">
                            <span className={`text-white capitalize  ${status === "almost due"? "bg-orange-400" : status==="overdue"? "bg-red-400" : status==="on-track"? "bg-green-400" : ""} rounded-full py-1 px-3 text-sm font-semibold`}>{status}</span>
                        </div>
                        <div className="flex justify-center items-center gap-2 ">
                            {currentFriend?.tags.map((tag, idx)=> <span key={idx} className="bg-green-200 py-1 px-3 rounded-full uppercase  text-sm font-semibold">{tag}</span>)}
                        </div>
                        <h2 className="text-gray-700"><i>&quot;{currentFriend?.bio}&quot;</i></h2>    
                        <p className="text-sm text-gray-600">Preferred: {currentFriend?.email}</p>

                    </div>
                    <div className="bg-white rounded-md shadow-sm text-center py-3 font-semibold cursor-pointer">
                        <h2 className="flex justify-center items-center gap-2"><RiNotificationSnoozeLine className="font-semibold text-lg" />Snooze 2 weeks</h2>
                    </div>
                    <div className="bg-white rounded-md shadow-sm text-center py-3 font-semibold cursor-pointer">
                        <h2 className="flex justify-center items-center gap-2"><FiArchive className="font-semibold text-lg" />Archive</h2>
                    </div>
                    <div className="bg-white rounded-md shadow-sm text-center py-3 font-semibold cursor-pointer text-red-500">
                        <h2 className="flex justify-center items-center gap-2"><RiDeleteBin6Line className="font-semibold text-lg" />Delete</h2>
                    </div>
                </div>
                <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="rounded-md shadow-sm bg-white p-5 text-center ">
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">{currentFriend?.days_since_contact}</h2>
                            <p className="text-gray-600">Days Since Contact</p>
                        </div>
                        <div className="rounded-md shadow-sm bg-white p-5 text-center">
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">{currentFriend?.goal}</h2>
                            <p className="text-gray-600">Goal (Days)</p>
                        </div>
                        <div className="rounded-md shadow-sm bg-white p-5 text-center">
                            <h2 className="text-[20px] lg:text-[26px] font-semibold mb-2 ">{currentFriend?.next_due_date}</h2>
                            <p className="text-gray-600">Next Due</p>
                        </div>

                    </div>
                    <div className="rounded-md shadow-sm bg-white p-5">
                        <div className="flex justify-between items-center gap-5 ">
                            <h2 className="font-semibold">Relationship Goal</h2>
                            <button className="btn">Edit</button>
                        </div>
                        <h2 className="text-gray-600 ">Connect every <span className="font-extrabold">{currentFriend?.goal} days</span></h2>
                    </div>
                    <div className="rounded-md shadow-sm bg-white p-5 space-y-3">
                        <h2 className="font-semibold">Quick Check-In</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <button  onClick={()=>handleInteraction(currentFriend?.id, currentFriend?.name, "call")} className=" btn h-25 shadow-sm bg-gray-100 text-center  rounded-md flex flex-col ">
                                <div className="flex justify-center items-center">
                                    <LuPhoneCall className="text-2xl font-extrabold"/>
                                </div>
                                <h2 className="text-sm xl:text-lg mt-2">Call</h2>
                            </button>
                            <button onClick={()=>handleInteraction(currentFriend?.id, currentFriend?.name, "text")} className="btn h-25 shadow-sm bg-gray-100 text-center py-4 rounded-md flex flex-col">
                                <div className="flex justify-center items-center">
                                    <LuMessageSquareMore className="text-2xl font-semibold"/>
                                </div>
                                <h2 className="text-sm xl:text-lg mt-2">Text</h2>
                            </button>
                            <button onClick={()=>handleInteraction(currentFriend?.id, currentFriend?.name, "video")} className="btn h-25 shadow-sm bg-gray-100 text-center py-4 rounded-md flex flex-col">
                                <div className="flex justify-center items-center">
                                    <PiVideoCameraLight className="text-3xl font-extrabold"/>
                                </div>
                                <h2 className="text-sm xl:text-lg mt-2">Video</h2>
                            </button>

                        </div>
                    </div>

                    <div className="rounded-md shadow-sm bg-white pt-5 px-5 space-y-3">
                        <div className="flex justify-between items-center gap-5 ">
                            <h2 className="font-semibold">Recent Interactions</h2>
                            <button className="btn flex justify-between items-center gap-2"><FaHistory />Full History</button>
                        </div>
                        {singleUserInteractions.length <= 0 ? <div className="p-10 flex justify-center items-center"><h2>No Interactions Yet...</h2></div>
                        
                        : singleUserInteractions.map((sui, idx) => <RecentInteractCard key={idx} sui={sui}></RecentInteractCard>)}
                        
                    </div>

                </div>

            </div>
            
            
        </div>
    );
};

export default FriendDetailsPage;