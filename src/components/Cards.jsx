import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Cards = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data));
    }, []);


    return (
        <div className='mt-8'>

            <h1 className='lg:text-5xl md:text-3xl text-2xl font-black text-center py-3'>Featured Brands</h1>
            <p className='text-center mb-10'>Immerse yourself in a world of quality and innovation with our handpicked selection of esteemed brand collaborators.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5'>

                {brands.map(br =><Link key={br._id} to={`/${br.brandName}`}> <Card   br={br}></Card> </Link> )}


            </div>

        </div>
    );
};

export default Cards;