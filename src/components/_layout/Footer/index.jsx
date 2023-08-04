import { items } from '../../../data/navbar';

import Logo from '../../Logo';

const Footer = () => {
    return(
        <footer className='flex items-center justify-center'>
            <div className='scale-[0.7]'>
                <Logo />
            </div>
        </footer>
    )
}

export default Footer