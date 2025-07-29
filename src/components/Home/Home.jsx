import React from 'react';
import Nav from '../Nav/Nav';
import Carousel from '../carousel/Carousel';
import Agproducts from '../agproducts/Agproducts';
import Landproduct from '../Landproduct/Landproduct';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div >


            <Nav></Nav>
            <Carousel></Carousel>

            <section className=' lg:mx-24'>
                <Agproducts></Agproducts>

                <Landproduct></Landproduct>

            </section>
            <Review></Review>
            <Contact></Contact>

        </div>
    );
};

export default Home;