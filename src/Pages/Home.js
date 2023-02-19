import React from 'react';
import msg from '../assets/media/msg.png';
import noti from '../assets/media/noti.png';
import profile from '../assets/media/profile.png';
import product1 from '../assets/product/peoduct1.png';
import product2 from '../assets/product/peoduct2.png';
import product3 from '../assets/product/peoduct3.png';
import fav from '../assets/product/love.png';
import imgg from '../assets/media/Frame 22.png';
import Orders from './Orders';

const Home = () => {
    return (
        <div>
            <div className='flex justify-between mb-10'>
                <div className=''>
                    <h3 className='text-3xl font-semibold'>Headphone</h3>
                    <p className='ml-5'>For the top band</p>
                </div>
                <div className='flex items-center mr-10'>
                    <input className='px-2 py-1 rounded-lg mr-4' type="text" placeholder='Search Product' />
                    <img className='w-8 h-8 bg-green-400 p-1 rounded-md mr-2' src={msg} alt="" />
                    <img className='w-8 h-8 bg-green-400 p-1 rounded-md mr-2' src={noti} alt="" />
                    <img className='w-8 h-8 bg-green-400 p-1 rounded-md mr-2' src={profile} alt="" />
                </div>
            </div>

            <div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div>
                            <div className="card card-side bg-base-100 shadow-2xl">
                                <figure className='W-1/2 p-4'><img src={product1} alt="product" /></figure>
                                <div className="card-body w-1/2">
                                    <h2 className="card-title">Beats Studio3 Wireless Headphone</h2>
                                    <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                                    <p className='font-semibold text-blue-300'>Price $ 450.55</p>
                                    <div className="flex items-center card-actions justify-evenly">
                                        <img src={fav} alt="" className='w-8 h-8' />
                                        <button className="btns">Add to cart</button>
                                        <button className="btnss">Buy Now</button>
                                    </div>
                                </div>
                            </div>

                            <div>

                            </div>

                        </div>
                    </div>






                    <div>
                        <div className='float-right mb-36'>
                            <img src={imgg} alt="" />
                        </div>
                        <div className="">
                            <Orders />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;