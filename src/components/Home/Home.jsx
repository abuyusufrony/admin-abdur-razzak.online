import React from 'react';
import Nav from '../Nav/Nav';
import Carousel from '../carousel/Carousel';
import Agproducts from '../agproducts/Agproducts';
import Landproduct from '../Landproduct/Landproduct';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div >


            <Nav></Nav>
            <Carousel></Carousel>
            <Agproducts></Agproducts>
            <Landproduct></Landproduct>
            <Review></Review>

        </div>
    );
};

export default Home;