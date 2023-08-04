const Paragraph = ({ feat='', text }) => {
    return(
        <p className="text-base leading-[200%] my-12">
            <span className="text-2xl leading-[200%]">{feat}</span>
            {text}
        </p>
    );
}

export default Paragraph