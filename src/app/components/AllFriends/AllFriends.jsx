import FriendCard from "../FriendCard/FriendCard";

const AllFriends = () => {
    return (
        <div className="bg-[#f8fafc] pt-10 pb-20">
            <div className="w-9/12 mx-auto">
            <h2 className="font-bold text-3xl mb-4">Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>

            </div>

            </div>
            
            
        </div>
    );
};

export default AllFriends;