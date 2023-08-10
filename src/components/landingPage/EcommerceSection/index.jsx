import { Section, Right, Left } from '../../_layout/Section';

import { image, title, titleBold, subtitle, subtitleBold } from '../../../data/landing-page/ecommerce';
import { ecommerce } from '../../../data/landing-page/squares';

import Title from '../Title';
import Subtitle from '../Subtitle';

const EcommerceSection = () => {
  return (
    <Section squares={ecommerce}>
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
                          
        </Right>
    </Section>
  )
}

export default EcommerceSection