import { thirdParagraphFeat, thirdParagraphRest } from "../../../data/landing-page/aboutMe";

import Paragraph from "./Paragraph";

const ThirdParagraph = () => {
    return(
        <Paragraph feat={thirdParagraphFeat} text={thirdParagraphRest} />
    )
}

export default ThirdParagraph