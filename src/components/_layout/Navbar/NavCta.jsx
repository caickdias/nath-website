const NavCta = ({ title, link }) => {
  return (
    <a href={link} className="py-5 w-44 font-bold 
      border-2 border-white rounded-full text-2xl 
      hover:bg-white hover:text-black transition-colors duration-300">
        {title}
    </a>
  )
}

export default NavCta