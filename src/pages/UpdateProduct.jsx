import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const product = useLoaderData()[0];
    console.log(product);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const ProductName = form.productName.value;
        const BrandName = form.brandName.value;
        const productPrice = form.productPrice.value;
        const url = form.url.value;
        const rating = form.rating6.value;
        const types = form.sel.value;
        const details = form.details.value;

        if(!rating){
            Swal.fire('Rating Missing', `Give the Product rating please`, 'error')
            return

        }
        else if(BrandName=='Select Brand Name'){
            Swal.fire('Brand Name Missing', `Select the Product Brand Name please`, 'error')
            return
        }

        else if(types=='Product Catagory / Types'){
            Swal.fire('Product Catagory / Types Missing', `Select the Product Product Catagory / Types please`, 'error')
            return
        }

        const productInfo = { ProductName, BrandName, productPrice, url, rating, types, details };

        fetch(`http://localhost:5000/update-products/${product._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productInfo),
        })
            .then(res => res.json())
            .then(data => data.acknowledged ? Swal.fire('Updated', 'You successfully Updated the product.', 'success') : Swal.fire('Error', `Something gone wrong.`, 'error'))

       



    }


    return (
        <div className='w-2/3 mx-auto'>

        <h1 className='text-3xl font-bold text-center mt-5 mb-4'>Update the Product</h1>
        <p className='text-sm text-center mb-8'>To update your product, kindly correct out the following information. The more details you provide, the better your product will appear to potential customers. Let&apos;s get started!</p>

        <form className="" onSubmit={handleUpdate}>
            <div className='grid md:grid-cols-2 gap-2 grid-cols-1'>
                <div>

                    <label className="label">
                        <span className="label-text">What is the Product name?</span>
                    </label>
                    <input type="text" required placeholder="Product name" defaultValue={product.ProductName} name='productName' className="input input-bordered w-full max-w-xs" />

                </div>

                <div>

                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input type="number" defaultValue={product.productPrice} required placeholder="Price" name='productPrice' className="input input-bordered w-full max-w-xs" />

                </div>



                <div>

                    <label className="label">
                        <span className="label-text">Product Image URL</span>
                    </label>
                    <input type="text" defaultValue={product.url} required placeholder="URL" name='url' className="input input-bordered w-full max-w-xs" />

                </div>






                <div className='mt-8'>

                    <select required name='brandName' defaultValue={product.BrandName} className="select select-ghost w-full max-w-xs outline-1">
                        <option disabled selected>Select Brand Name</option>
                        <option>Apple</option>
                        <option>Xiaomi</option>
                        <option>Samsung</option>
                        <option>Microsoft</option>
                        <option>Walton</option>
                        <option>Realme</option>
                    </select>

                </div>




                <div>

                    <label className="label">
                        <span className="label-text">Product Rating</span>
                    </label>
                    <div className="rating rating-md">
                        <input type="radio" name="rating6" defaultChecked={product.rating==1} value={1} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating6" defaultChecked={product.rating==2} value={2} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating6" defaultChecked={product.rating==3} value={3} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating6" defaultChecked={product.rating==4} value={4} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating6" defaultChecked={product.rating==5}  value={5} className="mask mask-star-2 bg-orange-400" />
                    </div>

                </div>

                <div className='mt-2'>

                    <select name='sel' defaultValue={product.types} required className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Product Catagory / Types</option>
                        <option>Mobile</option>
                        <option>Tablet</option>
                        <option>Leptop</option>
                        <option>Headphone</option>
                        <option>Monitor</option>
                        <option>Gadget</option>
                    </select>

                </div>

            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Details:</span>

                </label>
                <textarea required defaultValue={product.details} name='details' className="textarea textarea-bordered h-24" placeholder="Product Details"></textarea>
            </div>

            <div className='flex justify-center'><input className='btn mt-4 mx-auto' type="submit" value="Update Product" /></div>




        </form>

    </div>
    );
};

export default UpdateProduct;