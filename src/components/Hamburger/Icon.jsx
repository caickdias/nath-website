const Icon = ({ onClick }) => {
    return(
      <button className="flex flex-col gap-2 md:hidden" onClick={onClick}>
        <div className="w-10 h-1 rounded-full bg-main-white"></div>
        <div className="w-10 h-1 rounded-full bg-main-white"></div>
        <div className="w-10 h-1 rounded-full bg-main-white"></div>
      </button>
    )
}

export default Icon