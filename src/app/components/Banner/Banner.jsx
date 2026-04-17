import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-[#f8fafc] pt-20 pb-10 text-center'>
            <h2 className='w-[80%] mx-auto font-bold text-3xl md:text-4xl mb-4'>Friends to keep close in your life</h2>
            <p className='w-[80%] mx-auto text-sm text-gray-600 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <div className='flex justify-center items-center'>

                <button className='btn  text-white bg-[#244d3f] flex justify-center items-center gap-1'><FaPlus />Add a Friend</button>
            </div>
            
        </div>
    );
};

export default Banner;