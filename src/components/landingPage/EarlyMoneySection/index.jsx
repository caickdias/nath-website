import { Section, Right, Left } from '../../_layout/Section';

import { image, title, titleBold, subtitle, subtitleBold, button1, button2 } from '../../../data/landing-page/earlyMoneyHabits';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BlueButton from '../../buttons/BlueButton';
import TransparentButton from '../../buttons/TransparentButton';

const EarlyMoneySection = () => {
  return (
    <Section>
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
              className='h-5/6 my-12 lg:hidden'
            />

            <Subtitle text={subtitle} bold={subtitleBold} />

            <div className=' flex mt-12 gap-2'>
              <BlueButton title={button1.title} link={button1.link} />

              <TransparentButton title={button2.title} link={button2.link} />
            </div>
                          
        </Right>
    </Section>
  )
}

export default EarlyMoneySection