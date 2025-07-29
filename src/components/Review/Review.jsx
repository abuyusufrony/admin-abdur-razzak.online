import React from 'react';
import white from '../../assets/Ellipse 23.png'
import star from '../../assets/star.png'
import smile from '../../assets/smile.png'
import car from '../../assets/car.png'
import cardone from '../../assets/Group 480.png'
import circle from '../../assets/Group 484.png'
import seting from '../../assets/seting.png'
import vector from '../../assets/vector.png'
import koma from '../../assets/koma.png'
import arrow from '../../assets/Group 456.png'
import customer from '../../assets/customer.png'




import Marquee from 'react-fast-marquee';

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



            <div className="pt-6 sm:pt-10 md:pt-20 text-center text-black w-full max-w-[590px] flex flex-col justify-center items-center mx-auto space-y-2 px-4 sm:px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    why us
                </h2>
                <p className="text-sm sm:text-base md:text-lg">
                    We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.
                </p>
            </div>




            <section className="card-section">
                <div className="px-4 sm:px-6 md:px-12">
                    {/* Cards container */}
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-6 mt-10 p-4">
                        {/* Card 1 */}
                        <div className="bg-gradient-to-br from-white to-[#C7E4FF] p-6 rounded-2xl shadow-md max-w-full lg:max-w-md mt-4 lg:mt-16">
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

                        {/* Card 2 */}
                        <div className="bg-[rgb(0,43,85)] p-6 rounded-2xl text-white shadow-md max-w-full lg:max-w-md mt-4 lg:mt-0">
                            <div className="mb-4">
                                <img src={seting} alt="icon" className="w-14 h-16 mb-4" />
                            </div>
                            <h2 className="text-2xl font-semibold leading-snug mb-3">
                                Unmatched Durability with Corrosion-Free Technology
                            </h2>
                            <p className="text-base leading-relaxed text-white">
                                Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gradient-to-br from-white to-[#C7E4FF] p-6 rounded-2xl shadow-md max-w-full lg:max-w-md mt-4 lg:mt-16">
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

                    {/* Button */}
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <button className="bg-[rgb(176,221,29)] rounded-full px-8 py-2 cursor-pointer hover:bg-lime-600 mt-3.5">
                            Contact us
                        </button>
                    </div>
                </div>
            </section>



            <section>
                <div className="mt-8 ">
                    <div className="transform -rotate-2 origin-left">
                        <Marquee pauseOnHover={true} speed={70} gradient={false}>
                            <div className="flex space-x-6 bg-[rgb(217,236,255)] px-6 py-4 rounded-lg">

                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                        <img src={vector} alt="icon" className="w-6 h-6" />
                                        <h1 className="text-base font-semibold text-[rgb(0,43,85)] capitalize">
                                            {i % 2 === 0 ? "Quality Product" : "Shipping Across India"}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                </div>
            </section>



            {/* customers iamges section */}

            <section>
                <div className="pt-6 sm:pt-10 md:pt-20 mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-full flex flex-col justify-center items-center mx-auto space-y-2 px-4 sm:px-6 font-popins text-center">
                        Why Customers Love ❤️ Us?
                    </h2>

                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-4 mt-6 lg:h-[588px] p-4 sm:p-6 md:p-8 justify-center">
                        {/* Text Card */}
                        <div className="rounded-2xl w-full lg:w-[600px] bg-[rgb(242,244,246)]">
                            <div className="flex space-x-1.5 px-6 sm:px-8 md:px-12 mt-10 sm:mt-16 md:mt-28">
                                <img className="w-4 h-8 sm:w-5 sm:h-10" src={koma} alt="" />
                                <img className="w-4 h-8 sm:w-5 sm:h-10" src={koma} alt="" />
                            </div>
                            <div>
                                <p className="px-6 sm:px-8 md:px-12 text-base sm:text-lg md:text-2xl py-8 sm:py-12 md:py-16">
                                    I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft.) Value for money and easy to install. Happy with the product
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 px-6 sm:px-8 md:px-12 bg-white p-10  rounded-2xl m-2.5">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">- Samuel Varughese</h2>
                                <div className="flex space-x-2 p-1.5">
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-auto flex justify-center bg-[rgb(242,244,246)]  rounded-2xl">
                            <img className="max-w-full p-3 h-auto" src={customer} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Review;