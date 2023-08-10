const MenuCta = ({ title, link, onClick }) => {

    const handleOnClick = () => {
      window.location.hash = `${link}`;
      onClick();
    }

    return (
      <button  
        onClick={handleOnClick}
        className="flex items-center justify-center py-[5px] px-6 min-w-24 
        border-2 border-main-white rounded-full text-[28px] leading-loose 
        lg:w-36 lg:font-bold
        hover:bg-white hover:text-black transition-colors duration-300"
      >    
        {title}
      </button>
      
    )
  }
  
  export default MenuCta