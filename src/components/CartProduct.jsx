import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartProduct = ({ product }) => {

    const ret = parseInt(product.rating);
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= ret) ratings.push(<AiFillStar />)
        else ratings.push(<AiOutlineStar />)
    }

    const handleDelete = (proId) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-site-9ainxube8-md-rakib-hassans-projects.vercel.app/cart/${proId}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => data.deletedCount > 0 ? Swal.fire('Deleted', 'You successfully remove the product from the cart.', 'success') : Swal.fire('Error', `Something gone wrong.`, 'error'))

            }
        })



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
                    <button onClick={() => handleDelete(product._id)} className='btn'>Remove from Cart</button>

                </div>
            </div>
        </div>
    );
};

export default CartProduct;