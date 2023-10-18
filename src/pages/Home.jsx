import React from 'react';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div className='px-2'>
           <Banner></Banner>
            <Cards></Cards>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;