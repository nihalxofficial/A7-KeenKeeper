import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-gray-900 to-gray-800 pt-20 pb-16 text-center border-b border-gray-700'>
            <h2 className='w-[80%] mx-auto font-bold text-3xl md:text-4xl mb-4 text-white'>
                Friends to keep close in your life
            </h2>
            <p className='w-[80%] mx-auto text-sm md:text-base text-gray-300 mb-10'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className='hidden md:block' />
                relationships that matter most.
            </p>
            <div className='flex justify-center items-center'>
                <button className='btn bg-emerald-600 hover:bg-emerald-700 text-white flex justify-center items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/20 font-medium'>
                    <FaPlus className='text-sm' />
                    Add a Friend
                </button>
            </div>
        </div>
    );
};

export default Banner;