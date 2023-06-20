const NavItem = ({ title, link }) => {
  return (
    <a href={link} className="text-2xl">
        {title}
    </a>
  )
}

export default NavItem