import React from 'react';
import white from '../../assets/Ellipse 23.png'
import star from '../../assets/star.png'
import smile from '../../assets/smile.png'
import car from '../../assets/car.png'
import cardone from '../../assets/Group 480.png'
import circle from '../../assets/Group 484.png'
import seting from '../../assets/seting.png'

const Review = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8">
            <div className="content h-auto md:h-[300px] bg-[rgb(0,43,85)] rounded-2xl font-popins relative text-white py-10 md:py-0">


                <div className="pt-6 sm:pt-10 md:pt-20 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold px-2 sm:px-4">
                        Trusted By Over 6k Over Customers
                    </h2>
                </div>


                <div className="absolute -top-6 sm:-top-8 md:-top-12 left-1/2 -translate-x-1/2 w-12 sm:w-14 md:w-auto opacity-70">
                    <img src={white} alt="" className="w-full" />
                </div>


                <div className="flex flex-col   md:flex-row justify-around items-center mt-8 md:mt-10 space-y-6 md:space-y-0">


                    <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
                        <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                            <img src={star} alt="" className="w-5 sm:w-6 md:w-auto" />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl">Premium</h2>
                            <p className="text-sm sm:text-base md:text-lg">Products</p>
                        </div>
                    </div>


                    <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
                        <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                            <img src={smile} alt="" className="w-5 sm:w-6 md:w-auto" />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl">4000+</h2>
                            <p className="text-sm sm:text-base md:text-lg">Google Review</p>
                        </div>
                    </div>


                    <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
                        <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                            <img src={car} alt="" className="w-5 sm:w-6 md:w-auto" />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl">Delivery</h2>
                            <p className="text-sm sm:text-base md:text-lg">Across India</p>
                        </div>
                    </div>

                </div>


            </div>

            <div className="pt-6 sm:pt-10 md:pt-20 text-center text-black  w-[590px] flex flex-col justify-center items-center mx-auto space-y-2 ">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold px-2 sm:px-4">
                    why us
                </h2>
                <p>We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>
            </div>
            <section className='card-section  '>
                <div className=''>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10  p-4'>
                        <div className="bg-gradient-to-br from-white to-[#C7E4FF] p-6 rounded-2xl shadow-md max-w-md mt-16 ">
                            <div className="mb-4">
                                <img src={cardone} alt="icon" className="w-12 h-16" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-3">
                                Unmatched Durability<br />
                                with Corrosion-Free<br />
                                Technology
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
                            </p>
                        </div>


                        <div className="bg-[rgb(0,43,85)] p-6 rounded-2xl text-white shadow-md max-w-md  ">
                            <div className='mb-4'>
                                <img src={seting} alt="icon" className="w-14 h-16 mb-4" />
                            </div>
                            <h2 className="text-2xl font-semibold leading-snug mb-3">
                                Unmatched Durability with Corrosion-Free Technology
                            </h2>
                            <p className=" text-base leading-relaxed text-white">
                                Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-white to-[#C7E4FF] p-6 rounded-2xl shadow-md max-w-md mt-16 ">
                            <div className="mb-4">
                                <img src={circle} alt="icon" className="w-14 h-16" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
                                Innovative and Diverse <br /> Product Range

                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed">
                                We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
                            </p>
                        </div>

                    </div>
                </div>

            </section>

        </div>

    );
};

export default Review;