import { headerLine1, headerLine2 } from '../../../data/landing-page/aboutMe';
import { aboutme } from '../../../data/landing-page/squares';

import SquaresBg from '../../SquaresBg';

const Header = () => {
    return(
        <div className="relative flex flex-col justify-center w-screen h-60 bg-aboutme -ml-9 p-9 mb-24 bg-cover
            shadow-border-box z-10">
            <h1 className='text-5xl leading-[150%]'>{headerLine1}</h1>
            <h1 className='text-5xl leading-[150%]'>{headerLine2}</h1>           

            <SquaresBg squares={aboutme} />
        </div>
    );
}

export default Header