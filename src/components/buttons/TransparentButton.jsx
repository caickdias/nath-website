const TransparentButton = ({ title, link }) => {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center py-4 px-6 font-bold 
      border-2 border-white rounded-full text-[1.75rem] 
      hover:bg-white hover:text-black transition-colors duration-300"
    >
        {title}
    </a>
  )
}

export default TransparentButton