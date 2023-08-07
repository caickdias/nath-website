const SquaresSm = ({ squares }) => {
    return(
        <>
        {
            Object.keys(squares).length > 0 && Object.values(squares).map((square, index) => {            
                return(
                    <div 
                        key={index} 
                        className="absolute border-[3px] rounded-xl border-main-white opacity-10 z-30"
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
        </>
    )
}

export default SquaresSm