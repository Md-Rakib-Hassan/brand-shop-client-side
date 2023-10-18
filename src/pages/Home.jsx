import React from 'react';
import Cards from '../components/Cards';

const Home = () => {
    return (
        <div className='px-2'>
            <h1 className='lg:text-4xl md:text-2xl text-xl font-black text-center py-3'>Featured Brands</h1>
            <p className='text-center mb-10'>Immerse yourself in a world of quality and innovation with our handpicked selection of esteemed brand collaborators.</p>
            <Cards></Cards>
            
        </div>
    );
};

export default Home;