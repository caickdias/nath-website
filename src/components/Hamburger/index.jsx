import { useState } from 'react';

import { items, cta } from '../../data/navbar';
import Icon from './Icon';
import MenuItem from './MenuItem';
import MenuCta from './MenuCta';
import Logo from '../Logo';
import SquareIconTop from './SquareIconTop';
import SquareIconRight from './SquareIconRight';

const Hamburger = () => {
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = () => setIsMenuVisible(true);
  const closeMenu = () => setIsMenuVisible(false);

  return (
    <div>
      
      <Icon onClick={openMenu} />      

      <div
        className="fixed flex flex-col items-center justify-center gap-12 top-0 bg-background w-screen h-screen z-[100] 
          transition-all duration-300
          md:hidden"
        style={{
          left: isMenuVisible ? 0 : '100%'
        }}
      >

        <div className='absolute top-[190px] left-[110px]'>
          <SquareIconTop />
        </div>

        <div className="absolute w-16 h-16 top-[280px] left-[50px] border-[3px] rounded-xl border-main-white opacity-10"></div>
        
        <Logo size={0.6} />

        <div className='flex flex-col gap-12 my-8 z-50'>
        {
          items.map(item => (
            <MenuItem key={item.name} item={item} onClick={closeMenu} />
          ))
        }
        </div>

        <div className='absolute top-[660px] left-[320px]'>
          <SquareIconRight />
        </div>        

        <MenuCta title={cta.title} link={cta.link} onClick={closeMenu} />

      </div>

    </div>
  )
}

export default Hamburger