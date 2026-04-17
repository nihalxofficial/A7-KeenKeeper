import { LuMessageSquareMore } from 'react-icons/lu';
import messageImg from "../../assets/text.png"
import callImg from "../../assets/call.png"
import videoImg from "../../assets/video.png"
import Image from 'next/image';

const TimelineCard = ({interact}) => {
    return (
        <div className="bg-white p-4 border-b rounded-md shadow-sm border-gray-200 flex justify-start items-center gap-5">
                    <div className="flex justify-start items-center gap-4 ">
                        <div className=' flex justify-center items-center'>
                            <Image
                            height={100}
                            width={100}
                            src={interact.protocol === "text"? messageImg : interact.protocol === "call"? callImg : videoImg}
                            alt={interact.protocol === "text"? "messageImg" : interact.protocol === "call"? "callImg" : "videoImg"}
                            className='h-8 w-full object-contain'></Image>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold capitalize">{interact.protocol} <span className=' text-gray-600 lowercase font-medium'>with {interact.name}</span></h2>
                            <p className="text-sm text-gray-600">{interact.date}</p>
                        </div>
        
                    </div>
                    
                </div>
    );
};

export default TimelineCard;