import { aboutIcon, secondParagraphFeat, secondParagraphRest } from "../../../data/landing-page/aboutMe";

import Paragraph from "./Paragraph";

const SecondParagraph = () => {
    return(
        <div className='mb-20'>
            <img 
                src={aboutIcon}
                alt="about me icon"
                className="w-1/2 mt-20"
            />

            <Paragraph feat={secondParagraphFeat} text={secondParagraphRest} />
        </div>
    )
}

export default SecondParagraph