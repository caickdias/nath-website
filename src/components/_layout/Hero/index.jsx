import nathProfilePic from '../../../assets/landing-page/nath-hero.png';
import { titles, subtitle } from '../../../data/hero';

import { Section, Left, Right } from '../../Section';

import SocialIcons from '../../SocialIcons';

const Hero = () => {
  return (
    <Section>
        <Left flex={4} centerLeft >
          <div className='mt-36'>
            {titles.map(title => <Title key={title.name} title={title.text} />)}
          </div>

          <h1 className='text-3xl my-12'>{subtitle}</h1>

          <SocialIcons />

        </Left>

        <Right flex={5} centerLeft >
          <img 
            src={nathProfilePic}
            alt="nath avec snakes"
            className='h-3/4 mb-36'
          />
        </Right>
    </Section>
  )
}

const Title = ({ title }) => {
  return(
    <h1 className='text-[5rem] font-quattro tracking-[3px]'>
      {title}
    </h1>
  )
}

export default Hero