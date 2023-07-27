import nathProfilePic from '../../../assets/landing-page/nath-hero.png';
import { titles, subtitle } from '../../../data/landing-page/hero';

import { Section, Left, Right } from '../../_layout/Section';

import SocialIcons from '../../SocialIcons';

const Hero = () => {
  return (
    <Section>
        <Left flex={4} centerLeft >
          <div className='mt-52'>
            {titles.map(title => <Title key={title.name} title={title.text} />)}
          </div>

          <h1 className='text-3xl my-12'>{subtitle}</h1>

          <SocialIcons />

        </Left>

        <Right flex={5} centerLeft >
          <img 
            src={nathProfilePic}
            alt="nath avec snakes"
            className='pt-12'
          />
        </Right>
    </Section>
  )
}

const Title = ({ title }) => {
  return(
    <h1 className="text-[5rem]">
      {title}
    </h1>
  )
}

export default Hero