import Logo from "../../Logo"

import { items, cta } from '../../../data/navbar';

import NavItem from './NavItem';
import NavCta from "./NavCta";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-between w-full h-40 px-40 py-12">
        <div>
          <Logo />
        </div>
        
        <div className="flex w-full items-center justify-evenly">
          {
            items.map(item => <NavItem key={item.name} title={item.title} link={item.link} />)
          }
        </div>

        <div className="flex items-center justify-center">
          <NavCta title={cta.title} link={cta.link} />
        </div>
    </div>
  )
}

export default Navbar