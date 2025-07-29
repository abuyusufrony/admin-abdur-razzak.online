import React from 'react';
import Nav from '../Nav/Nav';
import Carousel from '../carousel/Carousel';
import Agproducts from '../agproducts/Agproducts';
import Landproduct from '../Landproduct/Landproduct';

const Home = () => {
    return (
        <div >


            <Nav></Nav>
            <Carousel></Carousel>
            <Agproducts></Agproducts>
            <Landproduct></Landproduct>

        </div>
    );
};

export default Home;