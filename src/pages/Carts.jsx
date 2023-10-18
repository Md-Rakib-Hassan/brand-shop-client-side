import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../MainWithFunc';
import CartProduct from '../components/CartProduct';

const Carts = () => {
    const context = useContext(myContext);
    const { user } = context;
    const email = user?.email;
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cart/${email}`)
            .then(res => res.json())
            .then(data => setCartItems(data));
    })
    return (
        <div>

            <h1 className='lg:text-5xl md:text-3xl text-2xl font-black text-center py-3 mt-3'>Your Tech Cart</h1>

            <p className='md:text-center mb-10 md:w-2/3 mx-auto text-justify px-2'>Your Tech Cart simplifies your shopping experience. Add items to your cart and proceed to checkout with confidence, knowing that the latest tech innovations are just a click away. Explore, shop, and enjoy the convenience of Your Tech Cart.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>

                {
                    cartItems.map(product => <CartProduct key={product._id} product={product}></CartProduct>)
                }


            </div>



        </div>
    );
};

export default Carts;