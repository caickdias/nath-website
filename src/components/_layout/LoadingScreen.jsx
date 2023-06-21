import { useEffect, useState } from 'react';
import Logo from '../Logo';

import nathpp from '../../assets/landing-page/nath-hero.png';

const LoadingScreen = () => {

    const LOADING_DELAY = 1000;

    const [flashScale, setFlashScale] = useState(0.0001);
    const [picOpacity, setPicOpacity] = useState(1);
    const [visibility, setVisibility] = useState(1);

    const [loading, setLoading] = useState(0);

    useEffect(() => {
        setTimeout(() => setFlashScale(100), [2500 + LOADING_DELAY]);
        setTimeout(() => setFlashScale(0), [2545 + LOADING_DELAY]);
        setTimeout(() => setPicOpacity(0), [2700 + LOADING_DELAY]);
        setTimeout(() => setVisibility(0), [4000 + LOADING_DELAY]);
        setTimeout(() => setLoading(-1000), [LOADING_DELAY]);
    },[]);


    return (
        <div className="absolute w-screen h-screen flex items-center justify-center bg-black z-[100] overflow-hidden transformation-all duration-700"
            style={{ opacity: picOpacity, transform: `scale(${visibility})` }}
        >
            <div className='absolute bottom-[34%] left-[49%] bg-white blur-lg w-16 h-16 rounded-full transition-all duration-300 z-[20]'
                style={{ transform: `scale(${flashScale})` }}
            />

            <div className='absolute bg-black w-screen h-screen z-20 transition-all duration-[3000ms]'
                style={{ transform: `translate(0, ${loading}px)` }}
            />

            <img 
                src={nathpp} 
                alt="nath avec snakes"
                className='h-1/2  z-10'
            />
        </div>
    )
}


export default LoadingScreen