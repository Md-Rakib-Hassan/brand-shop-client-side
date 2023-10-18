import React, { useEffect, useState,useContext } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr'
import LoadingPage from '../pages/LoadingPage';
import { useParams } from 'react-router-dom';
import { myContext } from '../MainWithFunc';


const  Slider = () => {


    const context = useContext(myContext)

    const {brands}=context;

    const crntbrand=useParams().brand;

    const desieredBrands =brands?.find(item=>item.brandName==crntbrand)

    const slide = desieredBrands?.slides;



    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);

    }, []);

    


    const next = () => {
        if (index == slide?.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    const prev = () => {
        if (index == 0) {
            setIndex(slide?.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    setTimeout(() => {
        next();
    }, 10000);



    if(slide?.length==0)return;

    return (
        <div>
            {slide?.length > 0 ?
                <div className='relative'>
                    <img className='w-full' src={slide[index]} alt="" />
                    <div className='action'>
                        <button className='absolute left-0 top-1/2 btn' onClick={prev}><GrPrevious></GrPrevious></button>
                        <button className='absolute right-0 top-1/2 btn' onClick={next}><GrNext></GrNext></button>
                    </div>

                </div> : <LoadingPage></LoadingPage>
    }
     </div>
    );
};

export default Slider;