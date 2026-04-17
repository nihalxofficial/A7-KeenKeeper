"use client"
import useFriends from "@/app/hooks/useFriends";
import FriendCard from "../FriendCard/FriendCard";

const AllFriends = () => {
    const {friends, loading}= useFriends()
    // console.log(friends);
    
    return (
        <div className="bg-[#f8fafc] pt-10 pb-20">
            <div className="w-9/12 mx-auto">
            <h2 className="font-bold text-3xl mb-4">Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                {
                    friends.map(friend=> <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }

            </div>

            </div>
            
            
        </div>
    );
};

export default AllFriends;