const Subtitle = ({ text, bold }) => {
  return (
    <h1 className="font-quattro-sans text-[1.75rem] leading-[200%] w-full text-left my-12">
        {text}
        <span className="font-bold">{bold}</span>
    </h1>
  )
}

export default Subtitle