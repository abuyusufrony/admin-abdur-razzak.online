import React from 'react';
import branch from '../../assets/Group 504.png';
import Map from '../../assets/MAP.png';
import loc from '../../assets/loc.png';

const Contact = () => {
    return (
        <div className="">
            <div className="font-popins">
                {/* Heading */}
                <div>
                    <div className="flex justify-center items-center">
                        <h2 className="bg-[rgb(176,221,29)] w-[180px] h-[36px] p-2 text-center font-semibold rounded-full mt-2 text-sm sm:text-base">
                            OUR BRANCHES
                        </h2>
                    </div>

                    <div className="flex justify-center items-center mt-4 px-4">
                        <img className="" src={branch} alt="" />
                    </div>
                </div>

                {/* Form + Map */}
                <div className="flex flex-col lg:flex-row justify-center items-center mt-4 gap-6 lg:space-x-4.5 px-4 sm:px-6">
                    {/* Contact Card */}
                    <div className="h-auto lg:h-[450px] w-full max-w-md lg:w-[390px] bg-[rgb(0,43,85)] mt-4 rounded-2xl">
                        <div>
                            <h2 className="text-white text-2xl sm:text-3xl pt-8 sm:pt-12 text-center lg:text-left lg:ml-7">
                                Contact Us
                            </h2>
                        </div>

                        <div className="flex flex-col space-y-3 justify-center items-center mt-4 px-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-[rgba(255,255,255,0.1)] text-white placeholder-gray-300 px-4 py-2 w-full max-w-xs sm:max-w-sm md:max-w-[340px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="bg-[rgba(255,255,255,0.1)] text-white placeholder-gray-300 px-4 py-2 w-full max-w-xs sm:max-w-sm md:max-w-[340px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Phone *"
                                className="bg-[rgba(255,255,255,0.1)] text-white placeholder-gray-300 px-4 py-2 w-full max-w-xs sm:max-w-sm md:max-w-[340px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Write Message *"
                                className="bg-[rgba(255,255,255,0.1)] text-white placeholder-gray-300 px-4 py-2 w-full max-w-xs sm:max-w-sm md:max-w-[340px] h-[98px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <button className="bg-[rgb(176,221,29)] w-[110px] h-[36px] p-2 text-center rounded-full mt-8 lg:ml-7">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Map + Address */}
                    <div className="relative w-full max-w-md lg:w-auto">
                        <img className="w-full h-auto lg:h-[450px]" src={Map} alt="" />
                        <div className="absolute bottom-2 left-2 right-2 bg-white rounded-2xl p-3 sm:p-4 text-sm sm:text-base">
                            <div className="flex space-x-2 items-start">
                                <img src={loc} alt="" className="mt-1 w-4 sm:w-5" />
                                <h2>
                                    (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;