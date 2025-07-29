import React from 'react';
import logo from '../../assets/jlog.jpeg';
import Facebook from '../../assets/Facebook.png';
import instra from '../../assets/instra.png';
import youtube from '../../assets/youtube.png';





const Footeer = () => {
    return (
        <div>
            <footer className="bg-[rgb(0,43,85)] text-white px-6 py-10 lg:px-20 lg:py-16 mt-3.5 font-popins rounded-2xl">
                {/* Section 1: Newsletter & Links */}
                <div className="service-contai flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-start lg:items-center mb-8">
                    {/* Newsletter */}
                    <div className="w-full lg:w-auto">
                        <h2 className="text-xl font-semibold">Join Our JF Products</h2>
                        <p className="mb-4">We’ll tell you about store updates and discounts</p>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="bg-[rgba(255,255,255,0.1)] text-white placeholder-gray-300 px-4 py-2 w-full max-w-full sm:max-w-sm md:max-w-[340px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3.5"
                        />
                        <div className="flex items-start space-x-2 mb-3">
                            <input
                                type="checkbox"
                                id="newsletter"
                                className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="newsletter" className="text-sm sm:text-base text-slate-400">
                                Yes, subscribe me to your newsletter.
                            </label>
                        </div>
                        <button className="w-full sm:w-[340px] h-10 cursor-pointer font-semibold rounded-full bg-white text-blue-950">
                            Join Now
                        </button>
                    </div>

                    {/* Info Section 1 */}
                    <div className="w-full sm:w-auto">
                        <h2 className="text-xl mt-6 lg:mt-0 font-semibold">Information</h2>
                        <div className="font-extralight space-y-1 mt-2">
                            <h2>Home</h2>
                            <h2>Shop</h2>
                            <h2>Our Story</h2>
                            <h2>Blogs</h2>
                            <h2>Contact</h2>
                        </div>
                    </div>

                    {/* Info Section 2 */}
                    <div className="w-full sm:w-auto">
                        <h2 className="text-xl mt-6 lg:mt-0 font-semibold">Helpful</h2>
                        <div className="font-extralight space-y-1 mt-2">
                            <h2>FAQs</h2>
                            <h2>Terms & Conditions</h2>
                            <h2>Privacy Policy</h2>
                            <h2>Shipping Policy</h2>
                            <h2>My Account</h2>
                        </div>
                    </div>
                </div>

                {/* Section 2: Logo and Contact */}
                <div className="logo-section flex flex-col lg:flex-row justify-between items-start lg:items-center pt-10 gap-6 lg:gap-0 mb-11">
                    <div className="flex items-start sm:items-center space-x-4">
                        <img className="rounded-full w-12 h-12 object-cover" src={logo} alt="" />
                        <div>
                            <h2>Our Branches</h2>
                            <p>Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
                        </div>
                    </div>

                    <button className="bg-[rgb(176,221,29)] text-black rounded-full px-6 py-2 cursor-pointer hover:bg-lime-600">
                        Contact us
                    </button>
                </div>
            </footer>

            {/* Bottom Copyright */}
            <div className="my-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-6 lg:px-20 text-sm sm:text-base text-center sm:text-left">
                <h1>Copyright © 2025 JF Products. All rights reserved</h1>
                <div className="flex items-center space-x-2.5">
                    <img src={Facebook} alt="Facebook" />
                    <img src={instra} alt="Instagram" />
                    <img src={youtube} alt="YouTube" />
                </div>
            </div>
        </div>

    );
};

export default Footeer;