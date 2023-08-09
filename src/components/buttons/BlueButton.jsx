const BlueButton = ({ title, link="#" }) => {
  return (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center bg-light-blue py-2 px-4
          font-bold text-black text-base rounded-full
          hover:scale-110 transition-all duration-300 z-10
          lg:text-[1.75rem] lg:py-4 lg:px-6"
    >
        {title}
    </a>
  )
}

export default BlueButton