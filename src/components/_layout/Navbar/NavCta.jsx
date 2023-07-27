const NavCta = ({ title, link }) => {
  return (
    <a href={link} className="flex items-center justify-center py-2 px-3 min-w-24 
      border-2 border-main-white rounded-full text-lg 
      lg:w-36 lg:font-bold
      hover:bg-white hover:text-black transition-colors duration-300">
        {title}
    </a>
  )
}

export default NavCta