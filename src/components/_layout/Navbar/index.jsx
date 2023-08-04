import Logo from "../../Logo"

import { items, cta } from '../../../data/navbar';

import NavItem from './NavItem';
import NavCta from "./NavCta";
import Hamburger from "../Hamburger";

const Navbar = () => {
  return (
    <header className="fixed bg-gradient-to-b from-background via-background to-trasparent z-50 
      top-0 left-0 flex items-center justify-between w-screen h-40 px-9
      lg:px-40 "
    >
        <div className="scale-[0.7] lg:scale-100">
          <Logo />
        </div>
        
        <div className="hidden md:flex w-full items-center justify-evenly">
          {
            items.map(item => <NavItem key={item.name} title={item.title} link={item.link} />)
          }
        </div>

        <div className="flex items-center justify-center">
          <NavCta title={cta.title} link={cta.link} />
        </div>

        <Hamburger />
    </header>
  )
}

export default Navbar