import { Section, Right, Left } from '../../_layout/Section';

import { image, title, titleBold, subtitle, subtitleBold, button1, button2 } from '../../../data/landing-page/onlineCloud';
import { onlineCloud } from '../../../data/landing-page/squares';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BlueButton from '../../buttons/BlueButton';
import TransparentButton from '../../buttons/TransparentButton';
import OnlineCloudIcon from '../Icons/OnlineCloudIcon';

const OnlineCloudSection = () => {
  return (
    <Section squares={onlineCloud}>
        <Left>
            <img 
              src={image}
              alt="mac"  
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

              <div className='relative pl-8'>

                <OnlineCloudIcon />
                
                <BlueButton title={button1.title} link={button1.link} />
              </div>
              
              <TransparentButton title={button2.title} link={button2.link} />
            </div>
                          
        </Right>
    </Section>
  )
}

export default OnlineCloudSection