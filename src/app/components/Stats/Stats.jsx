"use client"
import useFriends from '@/app/hooks/useFriends';
import React, { useContext } from 'react';

const Stats = () => {
    const { friends } = useFriends();
    const totalTrack = friends.filter(friend => friend.status === "on-track");
    
    // Calculate need attention (example logic - adjust as needed)
    const needAttention = friends.filter(friend => friend.status === "need-attention" || friend.status === "off-track");
    const interactionsThisMonth = 12; // Replace with actual data from your state/context
    
    return (
        <div className='bg-gradient-to-b from-gray-900 to-gray-800 py-12'>
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pb-12'>
                <div className='rounded-xl shadow-xl text-center py-8 px-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105'>
                    <h2 className='text-4xl mb-2 font-bold text-emerald-400'>{friends.length}</h2>
                    <p className='text-gray-300 font-medium'>Total Friends</p>
                </div>
                <div className='rounded-xl shadow-xl text-center py-8 px-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105'>
                    <h2 className='text-4xl mb-2 font-bold text-emerald-400'>{totalTrack.length}</h2>
                    <p className='text-gray-300 font-medium'>On Track</p>
                </div>
                <div className='rounded-xl shadow-xl text-center py-8 px-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105'>
                    <h2 className='text-4xl mb-2 font-bold text-orange-400'>{needAttention.length}</h2>
                    <p className='text-gray-300 font-medium'>Need Attention</p>
                </div>
                <div className='rounded-xl shadow-xl text-center py-8 px-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105'>
                    <h2 className='text-4xl mb-2 font-bold text-emerald-400'>{interactionsThisMonth}</h2>
                    <p className='text-gray-300 font-medium'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;