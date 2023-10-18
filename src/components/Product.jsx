import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const ret=parseInt(product.rating);
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= ret) ratings.push(<AiFillStar />)
        else ratings.push(<AiOutlineStar />)
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
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
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{product.types}</div>
                </div>
                <div className='flex justify-around gap-5'>
                    <Link to={`/product/${product?._id}`}><button className='btn '>Details</button></Link>
                    <Link to={`/updateProduct/${product?._id}`}><button className='btn'>Update</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;