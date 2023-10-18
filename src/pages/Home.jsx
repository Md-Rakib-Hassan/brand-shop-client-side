import React from 'react';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import Reviews from '../components/Reviews';
import Location from '../components/Location';
const Home = () => {
    return (
        <div className='px-2'>
           <Banner></Banner>
            <Cards></Cards>
            <Reviews></Reviews>
            <Location></Location>
            
        </div>
    );
};

export default Home;