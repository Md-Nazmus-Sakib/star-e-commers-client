import React from 'react';

const ProductBanner = ({ title, details, img }) => {
    return (
        <div className='w-full rounded-xl my-12 min-h-[400px] bg-black  relative overflow-hidden flex items-center justify-center'>
            <span className='w-[calc(100%+50rem)]  h-1/2 -ml-20 bg-gradient-to-r from-red-500 to-blue-500 absolute animate-[spin_8s_linear_infinite]'></span>
            {/* <span className='w-[calc(100%+10rem)] h-1/2 -ml-20 bg-gradient-to-r from-violet-500 to-green-500 absolute   animate-[spin_8s_linear_infinite_4s]' style={{ animationDelay: '2s' }} ></span> */}
            <span className='absolute rounded-xl ring-inset bg-black z-10 w-[calc(100%-10px)] h-[calc(100%-10px)]'></span>
            <div className='relative z-30 m-4 md:flex justify-center items-center'>
                <div className='md:w-1/2 my-10 md:mx-20'>
                    <h1 className='text-white text-5xl my-4'>{title}</h1>
                    <p>{details}</p>
                </div>
                <img className='md:w-1/2' src={img} alt="" />
            </div>
        </div>
    );
};

export default ProductBanner;