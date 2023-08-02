const TransparentButton = ({ title, link }) => {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center py-2 px-4 font-bold 
      border-2 border-white rounded-full text-base
      hover:bg-white hover:text-black transition-colors duration-300
        lg:text-[1.75rem] lg:py-4 lg:px-6"
    >
        {title}
    </a>
  )
}

export default TransparentButton