import React from 'react';
import Product from './Product';
import ProductBanner from './ProductBanner';
import Slider from 'react-slick';


const CategoryProduct = ({ allItems }) => {
    const { title, details, img, products } = allItems;
    // console.log(allItems.length)
    const settings = {

        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div>
            <ProductBanner
                title={title}
                details={details}
                img={img}
            ></ProductBanner>

            <div className='my-12'>


                <Slider {...settings}>

                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }


                </Slider>

            </div>
        </div>
    );
};

export default CategoryProduct;