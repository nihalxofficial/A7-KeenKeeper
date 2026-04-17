import { LuMessageSquareMore } from 'react-icons/lu';
import messageImg from "../../assets/text.png"
import callImg from "../../assets/call.png"
import videoImg from "../../assets/video.png"
import Image from 'next/image';

const TimelineCard = () => {
    return (
        <div className="bg-white p-4 border-b rounded-md shadow-sm border-gray-200 flex justify-start items-center gap-5">
                    <div className="flex justify-start items-center gap-4 ">
                        <div className=' flex justify-center items-center'>
                            <Image
                            height={100}
                            width={100}
                            src={messageImg}
                            alt='messageImg'
                            className='h-8 w-full object-contain'></Image>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Text <span className=' text-gray-600 font-medium'>with Tom Baker</span></h2>
                            <p className="text-sm text-gray-600">Asked for career advice</p>
                        </div>
        
                    </div>
                    
                </div>
    );
};

export default TimelineCard;