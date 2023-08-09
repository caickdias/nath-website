import { Section, Right, Left } from '../../_layout/Section';

import { image, title, titleBold, subtitle, subtitleBold, button1, button2 } from '../../../data/landing-page/earlyMoneyHabits';
import { earlyMoney } from '../../../data/landing-page/squares';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BlueButton from '../../buttons/BlueButton';
import TransparentButton from '../../buttons/TransparentButton';
import EarlyMoneyIcon from '../Icons/EarlyMoneyIcon';

const EarlyMoneySection = () => {
  return (
    <Section squares={earlyMoney}>
        <Left>
            <img 
              src={image}
              alt="iPhones"  
              className='hidden h-5/6 lg:flex'
            />
        </Left>

        <Right>            
          <Title text={title} bold={titleBold} />

            <div className='relative my-12'>

              <div className='absolute h-44 w-72 top-20 left-10 shadow-[0px_0_180px_#BDC9D2] bg-[#383838] blur-xl z-0'></div>

              <img 
                src={image}
                alt="mac"  
                className='relative h-5/6 lg:hidden z-50'
              />
            </div>

            <Subtitle text={subtitle} bold={subtitleBold} />

            <div className=' flex mt-24 gap-2'>
              
              <div className='relative mr-3'>

                <EarlyMoneyIcon />

                <BlueButton title={button1.title} link={button1.link} />
              </div>

              <TransparentButton title={button2.title} link={button2.link} />
            </div>
                          
        </Right>
    </Section>
  )
}

export default EarlyMoneySection