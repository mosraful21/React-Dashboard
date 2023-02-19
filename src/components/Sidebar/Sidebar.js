import React from 'react';
import home from '../../assets/home.png';
import explore from '../../assets/explore.png';
import saved from '../../assets/saved.png';
import cart from '../../assets/cart.png';
import selling from '../../assets/selling.png';
import profile from '../../assets/profile.png';
import history from '../../assets/history.png';
import contact from '../../assets/contact.png';
import setting from '../../assets/setting.png';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const menuItem = <>
    <div className='flex items-center'>
        <img src={home} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={explore} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/explore'>Explore</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={saved} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/saved'>Saved</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={cart} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/cart'>Cart</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={selling} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/selling'>Selling</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={profile} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/profile'>Profile</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={history} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/history'>History</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={contact} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/contact'>Contact</NavLink>
    </div>
    <div className='flex items-center'>
        <img src={setting} className='w-4 h-4 m-4' alt="" />
        <NavLink to='/setting'>Setting</NavLink>
    </div>
</>


const Sidebar = ({ children }) => {
    return (

        <div className='container'>
            <div className='sidebar shadow-2xl'>
                <Link to='/' className='flex items-center mt-5 mb-7'>
                    <img className='mr-2 w-8 h-8' src={logo} alt="" />
                    <h5 className='text-xl'>MKSounds</h5>
                </Link>

                <div>
                    {menuItem}
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;