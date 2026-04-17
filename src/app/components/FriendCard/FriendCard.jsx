import Image from "next/image";
import Link from "next/link";

const FriendCard = ({friend}) => {
    const {id, name, picture, days_since_contact, status, tags} = friend
    return (
        <Link href={`/friends/${id}`} className="bg-white rounded-md shadow-md p-5 text-center space-y-2">
            <div className="flex justify-center items-center">
                <Image src={picture}
                alt="Friend"
                height={600}
                width={600}
                className="rounded-full h-20 w-20 object-cover"></Image>
            </div>
            <h2 className="text-2xl font-bold ">{name}</h2>
            <p className="text-sm text-gray-600">{days_since_contact}d ago</p>
            <div className="flex justify-center items-center gap-2 ">
                <span className="bg-green-200 py-1 px-3 rounded-full uppercase  text-sm font-semibold">Work</span>
            </div>
            <div className="flex justify-center items-center gap-2">
                <span className="text-white capitalize bg-orange-400 rounded-full py-1 px-3 text-sm font-semibold">{status}</span>
            </div>
            
        </Link>
    );
};

export default FriendCard;