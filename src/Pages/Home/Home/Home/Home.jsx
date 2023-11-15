import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';

const Home = () => {
    const products = useLoaderData();
    // console.log(products.length)
    return (

        <div className=''>
            <Banner></Banner>
            <Products products={products}></Products>
        </div>
    );
};

export default Home;