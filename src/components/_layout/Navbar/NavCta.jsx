const NavCta = ({ title, link }) => {
  return (
    <a href={link} className="flex items-center justify-center py-4 w-36 font-bold 
      border-2 border-white rounded-full text-xl 
      hover:bg-white hover:text-black transition-colors duration-300">
        {title}
    </a>
  )
}

export default NavCta