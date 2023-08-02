const Title = ({ text, bold='' }) => {
  return (
    <h1 className="text-2xl px-4 text-center leading-[200%]
      lg:text-[4rem]">
        <span className="font-bold">{bold}</span>
        {text}
    </h1>
  )
}

export default Title