const Section = ({ children }) => {
  return (
    <section className="flex flex-col-reverse flex-1 px-8 w-screen h-screen
      lg:flex-row lg:px-40">
        {children}
    </section>
  )
}

export default Section