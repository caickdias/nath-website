const BlueButton = ({ title, link="#" }) => {
  return (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center py-4 px-6 bg-light-blue 
          font-bold text-black font-quattro-sans text-[1.75rem] rounded-full
          hover:scale-110 transition-all duration-300"
    >
        {title}
    </a>
  )
}

export default BlueButton