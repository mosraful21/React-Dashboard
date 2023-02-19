import React from 'react';
import product1 from '../assets/product/peoduct1.png';
import product2 from '../assets/product/peoduct2.png';
import product3 from '../assets/product/peoduct3.png';

const product = [
    {
        img: product1,
        name: 'Bots New Headphone',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product2,
        name: 'Best Headphones For',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product3,
        name: 'Bots New Headphone ',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product1,
        name: 'Bots New Headphone ',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product2,
        name: 'Bots New Headphone ',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product3,
        name: 'Bots New Headphone ',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product1,
        name: 'Bots New Headphone ',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product2,
        name: 'Bots New Headphone ',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    },
    {
        img: product3,
        name: 'Bots New Headphone ',
        disc: '256 Review And 1150 Order',
        price: '45.5'
    }
]

const Orders = () => {
    return (
        <div>
            {
                product.map((product, index) => <div key={index} className='flex items-center float-right'>
                    <img src={product.img} className='porduct-img' alt="" />
                    <div className='ml-1 justify-between'>
                        <p className='font-semibold mr-2'>{product.name}</p>
                        <p className='disc'>{product.disc}</p>
                    </div>
                    <span className='price'>Price : ${product.price}</span>
                </div>)
            }
        </div>
    );
};

export default Orders;