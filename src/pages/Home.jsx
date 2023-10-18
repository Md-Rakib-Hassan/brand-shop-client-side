import React from 'react';
import Cards from '../components/Cards';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className='px-2'>
           <Banner></Banner>
            <Cards></Cards>
            
        </div>
    );
};

export default Home;