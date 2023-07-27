import { Section, Right, Left } from '../../_layout/Section';

import { image, title, subtitle, subtitle2, button1, button2 } from '../../../data/landing-page/betterSchool';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BlueButton from '../../buttons/BlueButton';
import TransparentButton from '../../buttons/TransparentButton';

const BetterSchoolSection = () => {
  return (
    <Section>
        <Left>
            <img 
              src={image}
              alt="iPhones"  
              className='h-5/6'
            />
        </Left>

        <Right>            
          <Title text={title} />

          <Subtitle text={subtitle} bold={subtitle2} />

          <div className='flex mt-12 gap-16'>
            <BlueButton title={button1.title} link={button1.link} />

            <TransparentButton title={button2.title} link={button2.link} />
          </div>
                          
        </Right>
    </Section>
  )
}

export default BetterSchoolSection