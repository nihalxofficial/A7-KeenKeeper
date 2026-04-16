import React from 'react';

const Stats = () => {
    return (
        <div className='bg-[#f8fafc] '>
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 pb-10 border-b-2 border-gray-200'>
                <div className='rounded-md shadow-sm text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold'>10</h2>
                    <p className='text-gray-600'>Total Friends</p>
                </div>
                <div className='rounded-md shadow-sm text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold'>3</h2>
                    <p className='text-gray-600'>On Track</p>
                </div>
                <div className='rounded-md shadow-sm text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold'>6</h2>
                    <p className='text-gray-600'>Need Attention</p>
                </div>
                <div className='rounded-md shadow-sm text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold'>12</h2>
                    <p className='text-gray-600'>Interactions This Month</p>
                </div>
                
            </div>
        </div>
    );
};

export default Stats;