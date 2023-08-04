import { aboutIcon, secondParagraphFeat, secondParagraphRest } from "../../../data/landing-page/aboutMe";


import Paragraph from "./Paragraph";

const SecondParagraph = () => {
    return(
        <div className=''>
            <img 
                src={aboutIcon}
                alt="about me icon"
                className="w-1/2"
            />

            <Paragraph feat={secondParagraphFeat} text={secondParagraphRest} />
        </div>
    )
}

export default SecondParagraph