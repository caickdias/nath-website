import { items } from '../../../data/navbar';

import Logo from '../../Logo';
import MenuItem from './MenuItem';
import SquaresBg from '../../SquaresBg';

import SocialIcons from '../../SocialIcons';
import { footer } from '../../../data/landing-page/squares';

const Footer = () => {

    const year = new Date().getFullYear();

    return(
        <footer className='relative flex flex-col items-center justify-center gap-5 pb-7'>

            <SquaresBg squares={footer} />

            <div className='scale-[0.7]'>
                <Logo />
            </div>

            <div className='flex gap-4'>
            {
                items.map(item => <MenuItem key={item.name} text={item.title} link={item.link} />)
            }
            </div>

            <SocialIcons />

            <h1 className='text-2xl leading-loose'>Thank you for browsing!</h1>

            <h1 className='text-xs leading-loose'>Nathalia Andrade Rocha ©{year}</h1>
        </footer>
    )
}

export default Footer