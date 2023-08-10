import SquaresBg from '../../SquaresBg';

const Section = ({children, squares={}, ...rest} ) => {
  return (
    <section className="relative flex flex-col-reverse flex-1 px-8 w-screen h-screen
      lg:flex-row lg:px-40" {...rest} >
        {children}

        <SquaresBg squares={squares} />
    </section>
  )
}

export default Section