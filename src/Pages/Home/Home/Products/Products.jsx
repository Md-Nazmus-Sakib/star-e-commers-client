import React from 'react';
import CategoryProduct from './CategoryProduct';
import sneakerImg from '../../../../assets/image/sneaker.jpg'
import pantImg from '../../../../assets/image/pants.jpg'
import bootImg from '../../../../assets/image/boots.jpg'
import bagImg from '../../../../assets/image/bags.jpeg'
import capImg from '../../../../assets/image/caps.jpg'
import earphonesImg from '../../../../assets/image/earphones.jpg'
import bottlesImg from '../../../../assets/image/bottle.jpg'

const Products = ({ products }) => {
    const ProductSneakers = products.filter(item => item.category === "Men's Sneaker");
    const sneakers = ProductSneakers.slice(0, 6)

    const productPants = products.filter(item => item.category === "Men's Pants");
    const pants = productPants.slice(0, 6);
    const productBoots = products.filter(item => item.category === "Men's Boot");
    const boots = productBoots.slice(0, 6);
    const productBags = products.filter(item => item.category === "Bag");
    const bags = productBags.slice(0 - 6);
    const productCaps = products.filter(item => item.category === "Cap");
    const caps = productCaps.slice(0, 6);
    const productEarphones = products.filter(item => item.category === "Earphones");
    const earphones = productEarphones.slice(0, 6);
    const productBottles = products.filter(item => item.category === "Bottle");
    const bottles = productBottles.slice(0, 6)
    // console.log(sneakers.length, pants.length, boots.length, bags.length, caps.length, earphones.length, bottles.length)
    // const items = [sneakers, pants, boots, bags, caps, earphones, bottles]


    const items = [
        {
            title: "Men's Sneaker",
            details: "Men's sneakers are versatile and comfortable footwear designed for everyday wear, sports, or athletic activities. Be sure to check the specific product details for the brand, model, size, materials, and design that best fit your needs and style.",
            img: sneakerImg,
            products: sneakers
        },
        {
            title: "Men's Pants",
            details: "Men's pants are essential components they come in various styles, including jeans, chinos, dress pants, and casual trousers.  Check the product details for specific features, like fit, pockets, and closures, to find the perfect pair to complete your outfit.",
            img: pantImg,
            products: pants
        },
        {
            title: "Men's Boot",
            details: "Men's boots are rugged and stylish footwear designed to offer durability and protection in various settings. Available in a range of styles, from work boots to fashion-forward designs, men's boots often feature sturdy leather or synthetic uppers that provide support and protection for the feet and ankles. ",
            img: bootImg,
            products: boots
        },
        {
            title: "Bag",
            details: "A bag is a versatile accessory designed for carrying your belongings. Available in various styles, such as backpacks, totes, and messenger bags, bags are typically made from materials like leather, canvas, or synthetic fabrics.",
            img: bagImg,
            products: bags
        },
        {
            title: "Cap",
            details: "Caps come in various colors and designs and are adorned with logos, patterns, or plain styles. They're popular for casual wear and outdoor activities, offering a comfortable way to shield your eyes from the sun.",
            img: capImg,
            products: caps
        },
        {
            title: "Earphones",
            details: "Earphones are small audio devices designed to deliver sound directly into your ears. They're lightweight and portable, making them ideal for on-the-go music listening, phone calls, and entertainment. They often have in-ear or over-ear designs and can be wired or wireless, with Bluetooth connectivity.",
            img: earphonesImg,
            products: earphones
        },
        {
            title: "Bottle",
            details: "Bottles are containers typically used for holding liquids, such as water, beverages, or even protein shakes. They come in various materials, including plastic, stainless steel, and glass. Some bottles are designed for single-use, while others are reusable and environmentally friendly.",
            img: bottlesImg,
            products: bottles
        },
    ]
    return (
        <div className='bg-white rounded-xl'>
            {
                items.map((allItems, index) => <CategoryProduct
                    key={index}
                    allItems={allItems}
                ></CategoryProduct>)
            }
        </div>
    );
};

export default Products;