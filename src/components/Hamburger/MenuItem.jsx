const MenuItem = ({ item, onClick }) => {

    const handleOnClick = () => {
        window.location.hash = `${item.link}`;
        onClick();
    }

    return(
        <button 
            className='text-[28px] leading-loose'
            onClick={handleOnClick} 
          >
            {item.title}
        </button>
    )
}

export default MenuItem