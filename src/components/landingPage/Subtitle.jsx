const Subtitle = ({ text, bold }) => {
  return (
    <h1 className="text-base leading-[200%] w-full text-center 
      lg:my-12 lg:text-[1.75rem] lg:text-left">
        {text}
        <span className="font-bold">{bold}</span>
    </h1>
  )
}

export default Subtitle