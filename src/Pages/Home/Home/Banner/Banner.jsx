import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../../assets/Banner/banner1.png'
import img2 from '../../../../assets/Banner/banner2.png'
import img3 from '../../../../assets/Banner/banner3.png'
import img4 from '../../../../assets/Banner/banner4.png'
import img5 from '../../../../assets/Banner/banner5.png'
import img6 from '../../../../assets/Banner/banner6.png'
import banner2 from '../../../../assets/Banner/banner-2.png'


const Banner = () => {
    const settings = {

        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'CSS3 Animation Easing',
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className='py-4 relative min-h-[600px] md:flex bg-white text-black px-4'>
            <div className='md:w-1/2 flex justify-center items-center py-6 mb-20 '>
                <div className='sm:w-2/3 mx-auto'>
                    <h1 className='text-5xl my-4'>Trend Fashion <br />collection</h1>
                    <p>Sustainable fashion is a standout trend, with a focus on eco-friendly materials and ethical practices. The current fashion scene celebrates diversity, sustainability, and the freedom to express one's unique style.</p>
                </div>
            </div>
            <div className='md:w-1/2 min-h-[300px] md:h-full'>
                <img src={banner2} alt="" />
                <div className='w-96 absolute bottom-0 h-96 md:h-[500px] right-0 md:right-20 sm:bottom-10'>
                    <Slider {...settings}>
                        <div className='w-full min-h-[500px] '>
                            <img className='w-[300px] h-96 sm:h-full' src={img1} alt="" />
                        </div>

                        <div className='w-full min-h-[500px] '>
                            <img className='w-[300px] h-96 sm:h-full' src={img2} alt="" />
                        </div>

                        <div className='w-full min-h-[500px] '>
                            <img className='w-[300px] h-96 sm:h-full' src={img3} alt="" />
                        </div>

                        <div className='w-full min-h-[500px] '>
                            <img className='w-[300px] h-96 sm:h-full' src={img4} alt="" />
                        </div>

                        <div className='w-full min-h-[500px] '>
                            <img className='w-[300px] h-96 sm:h-full' src={img5} alt="" />
                        </div>

                        <div className='w-full min-h-[500px] '>
                            <img className='w-[300px] h-96 sm:h-full' src={img6} alt="" />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;