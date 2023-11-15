import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tilt from 'react-parallax-tilt';


const Product = ({ product }) => {
    // console.log(product)



    const { img, name, seller, price, category } = product;


    return (
        <Tilt

        >
            <div className="inner-element card bg-base-100 w-[300px] h-[300px] shadow-xl mx-4 border-4 border-pink-500 my-16 relative group rounded-xl">
                <figure className='absolute top-0 left-0 w-full h-full'><img className='rounded-xl' src={img} alt="item" /></figure>
                <div className="card-body rounded-xl absolute top-1/2 left-8 right-8 bg-black bg-opacity-60 text-white transform translate-z-20 scale-y-0 p-4 transition-transform transform-origin-top group-hover:scale-y-100 border-4 border-black">
                    <h2 className="card-title">{category}</h2>
                    <h2 >
                        {name}
                        <div className="badge badge-secondary mx-2">NEW</div>
                    </h2>
                    <p>Seller : {seller}</p>
                    <p>Price: $ {price}</p>
                </div>
            </div>
        </Tilt>
    );
};

export default Product;