import { firstParagraph, nathPic } from "../../../data/landing-page/aboutMe";

import Paragraph from "./Paragraph";

const FirstParagraph = () => {
    return(
        <div className="relative">

            <img 
                src={nathPic}
                alt="nath pic"
                className='absolute -top-[80px] left-[170px] w-2/4 z-10'
            />

            <Paragraph text={firstParagraph} />
        </div>
    )
}

export default FirstParagraph