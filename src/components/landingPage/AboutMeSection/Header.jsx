import { headerLine1, headerLine2 } from '../../../data/landing-page/aboutMe';

const Header = () => {
    return(
        <div className="flex flex-col justify-center w-screen h-60 bg-aboutme -ml-9 p-9 bg-cover
            shadow-border-box">
            <h1 className='text-5xl leading-[150%]'>{headerLine1}</h1>
            <h1 className='text-5xl leading-[150%]'>{headerLine2}</h1>
        </div>
    );
}

export default Header