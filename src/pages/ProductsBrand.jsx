
import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import Product from '../components/Product';

const ProductsBrand = () => {

    const Products=useLoaderData();
    console.log(Products);
    // console.log(ar);

    return (
        <div>
            <Slider></Slider>

            <h1 className='lg:text-5xl md:text-3xl text-2xl font-black text-center py-3 mt-10'>Our Product</h1>

            <p className='md:text-center mb-10 md:w-2/3 mx-auto text-justify px-2'>Explore the latest in tech from top brands. From flagship smartphones to laptops, headphones, gaming consoles, and smart devices, we&apos;ve got your tech needs covered. Discover innovation and quality across the board.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>
            {
                Products.map(product=><Product key={product._id} product={product}></Product>)
            }

            </div>
            
            
        </div>
    );
};

export default ProductsBrand;