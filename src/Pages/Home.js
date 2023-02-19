import React from 'react';
import msg from '../assets/media/msg.png';
import noti from '../assets/media/noti.png';
import profile from '../assets/media/profile.png';

const Home = () => {
    return (
        <div className='flex justify-between'>
            <div className=''>
                <h3 className='text-3xl font-semibold'>Headphone</h3>
                <p className='ml-5'>For the top band</p>
            </div>
            <div className='flex items-center'>
                <input className='px-2 py-1 rounded-lg mr-4' type="text" placeholder='Search Product' />
                <img className='w-8 h-8 bg-green-400 p-1 rounded-md mr-2' src={msg} alt="" />
                <img className='w-8 h-8 bg-green-400 p-1 rounded-md mr-2' src={noti} alt="" />
                <img className='w-8 h-8 bg-green-400 p-1 rounded-md mr-2' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Home;