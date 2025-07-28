import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/Group.png';
import man from '../../assets/Frame.png';
import search from '../../assets/Frame (1).png';
import cart from '../../assets/Group 409.png';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full px-4 md:px-8 lg:px-[310px] font-popins">
            <div className="navbar bg-base-100 flex items-center justify-between py-4">

                <div className="flex items-center">

                    <div className="lg:hidden mr-4">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>


                    <div className="hidden lg:flex space-x-12 text-[rgb(26,26,26)] text-sm ">
                        <Link>Home</Link>
                        <Link>Shop</Link>
                        <Link>Blogs</Link>
                        <Link>Contact</Link>
                    </div>
                </div>


                <div className="flex justify-center lg:ml-12">
                    <img className="w-[70px] h-[95px]" src={logo} alt="Logo" />
                </div>


                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <button className='cursor-pointer'>Login</button>
                        <img src={man} alt="User" className="w-6 h-6" />
                    </div>
                    <img src={search} alt="Search" className="w-6 h-6" />
                    <img src={cart} alt="Cart" className="w-6 h-6 " />
                </div>
            </div>

            {/* Mobile menu (shown only when hamburger is open) */}
            {isMenuOpen && (
                <div className="lg:hidden flex flex-col gap-4 mt-3 bg-base-100 px-2 py-4 rounded shadow text-[rgb(26,26,26)]">
                    <Link onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link onClick={() => setIsMenuOpen(false)}>Shop</Link>
                    <Link onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                    <Link onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
};

export default Nav;
