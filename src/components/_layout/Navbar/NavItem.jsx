const NavItem = ({ title, link }) => {
  return (
    <a href={link} className="hover:text-logo-dark-blue text-xl transition-colors duration-300">
        {title}
    </a>
  )
}

export default NavItem