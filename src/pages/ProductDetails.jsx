import React, { useContext } from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

import { useLoaderData } from 'react-router-dom';
import { myContext } from '../MainWithFunc';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const productInfo=useLoaderData();
    const product=productInfo[0];
    const context=useContext(myContext);
    const {user}=context;
    

    const ret=parseInt(product.rating);
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= ret) ratings.push(<AiFillStar />)
        else ratings.push(<AiOutlineStar />)
    }
    const {_id, ...rest}= product;
    const cartProduct= {email:user.email, ...rest};
    const handleAddtoCart=()=>{
        console.log(cartProduct);
       
        fetch('https://server-site-9ainxube8-md-rakib-hassans-projects.vercel.app/cart', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(cartProduct),
        })
            .then(res => res.json())
            .then(data => data.acknowledged ? Swal.fire('Added to Cart', 'You successfully added the product in your cart.', 'success') : Swal.fire('Error', `Something gone wrong.`));


    }
    
    return (
        <div className="card  bg-base-100">
            <figure><img src={product.url} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.ProductName}
                </h2>
                <p>Brand: {product.BrandName}</p>
                <p>Price: {product.productPrice}</p>
                <div className='flex gap-2 items-center'>
                    <span className=''>Rating: </span>
                    <div className='flex text-yellow-400  '>{...ratings}</div>

                </div>
                <p>Types: {product.types}</p>
                <button onClick={handleAddtoCart} className='btn w-36'>Add to cart</button>
                <hr className='my-4' />
                <p className='text-3xl font-bold'>Details:</p>
                <p>{product.details}</p>
                
                
            </div>
        </div>
    );
};

export default ProductDetails;