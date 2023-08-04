const Section = ({ children, squares={}}) => {
  return (
    <section className="relative flex flex-col-reverse flex-1 px-8 w-screen h-screen
      lg:flex-row lg:px-40">
        {children}

        {
          Object.keys(squares).length > 0 && Object.values(squares.sm).map((square, index) => {            
            return(
              <div 
                key={index} 
                className="absolute border-[3px] rounded-xl border-main-white opacity-10 z-50"
                style={{
                  height: `${square.size}px`,
                  width: `${square.size}px`,
                  top: square.top,
                  left:square.left
                }}
              ></div>
            )
          })
        }
    </section>
  )
}

export default Section