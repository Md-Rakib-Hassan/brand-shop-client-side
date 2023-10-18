import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [brands,setBrands]=useState([]);
    fetch('http://localhost:5000/brands')
    .then(res=>res.json())
    .then(data=>setBrands(data));
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5'>

            {brands.map(br =><Card key={br._id} br={br}></Card>)}


            </div>
            
        </div>
    );
};

export default Cards;