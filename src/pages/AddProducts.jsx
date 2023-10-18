import React from 'react';

const AddProducts = () => {

    const handleSubmit=(e) => {
        e.preventDefault();
        const form=e.target;
        const ProductName=form.productName.value;
        const BrandName=form.brandName.value;
        const productPrice=form.productPrice.value;
        const url=form.url.value;
        const rating=form.rating6.value;
        const types=form.sel.value;
        const details=form.details.value;

        const productInfo={ProductName, BrandName, productPrice, url, rating, types, details};

        fetch('http://localhost:5000/add-products',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(productInfo),
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

        console.log(productInfo);
        


    }



    return (
        <div className='w-2/3 mx-auto'>

            <h1 className='text-3xl font-bold text-center mt-5 mb-4'>Add a New Product</h1>
            <p className='text-sm text-center mb-8'>To list your product, kindly fill out the following information. The more details you provide, the better your product will appear to potential customers. Let&apos;s get started!</p>

            <form className="" onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-2 grid-cols-1'>
                    <div>

                        <label className="label">
                            <span className="label-text">What is the Product name?</span>
                        </label>
                        <input type="text" placeholder="Product name" name='productName' className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div>

                        <label className="label">
                            <span className="label-text">What is the Brand name?</span>
                        </label>
                        <input type="text" placeholder="Brand name" name='brandName' className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div>

                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="text" placeholder="Price" name='productPrice' className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div>

                        <label className="label">
                            <span className="label-text">Product Image URL</span>
                        </label>
                        <input type="text" placeholder="URL" name='url' className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div>

                        <label className="label">
                            <span className="label-text">Product Rating</span>
                        </label>
                        <div className="rating rating-md">
                            <input type="radio" name="rating6" value={1} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating6" value={2} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating6" value={3} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating6" value={4} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating6" value={5} className="mask mask-star-2 bg-orange-400" />
                        </div>

                    </div>

                    <div className='mt-2'>

                        <select name='sel' className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Product Catagory / Types</option>
                            <option>Mobile</option>
                            <option>Teblet</option>
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
                    <textarea name='details' className="textarea textarea-bordered h-24" placeholder="Product Details"></textarea>
                </div>

                <div className='flex justify-center'><input className='btn mt-4 mx-auto' type="submit" value="Add Product" /></div>

                


            </form>

        </div>
    );
};

export default AddProducts;