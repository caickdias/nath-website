const MenuItem = ({ text, link }) => {
    return(
        <a 
            href={link}
            className="text-base leading-loose underline"
        >
            {text}
        </a>
    )
}

export default MenuItem