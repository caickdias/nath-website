import { Section, Right, Left } from '../../_layout/Section';

import { image, title, titleBold, subtitle, subtitleBold, button2 } from '../../../data/landing-page/haydn';
import { haydn } from '../../../data/landing-page/squares';

import Title from '../Title';
import Subtitle from '../Subtitle';
import TransparentButton from '../../buttons/TransparentButton';

const HaydnSection = () => {
  return (
    <Section squares={haydn}>
        <Left>
            <img 
              src={image}
              alt="iPhones"  
              className='hidden h-5/6 lg:flex'
            />
        </Left>

        <Right>            
          <Title text={title} bold={titleBold} />

            <img 
              src={image}
              alt="mac"  
              className='h-5/6 my-12 lg:hidden z-40'
            />

            <Subtitle text={subtitle} bold={subtitleBold} />

            <div className=' flex mt-12 gap-2'>
              <TransparentButton title={button2.title} link={button2.link} />
            </div>
                          
        </Right>
    </Section>
  )
}

export default HaydnSection