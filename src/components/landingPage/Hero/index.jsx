import { heroSection } from '../../../data/landing-page/squares';

import nathProfilePic from '../../../assets/landing-page/nath-hero.png';
import { titles, subtitle } from '../../../data/landing-page/hero';

import { Section, Left, Right } from '../../_layout/Section';

import SocialIcons from '../../SocialIcons';

const Hero = () => {
  return (
    <Section squares={heroSection}>
        <Left flex={4} centerLeft >
          <div className='-mt-20 lg:mt-52 z-40'>
            {titles.map(title => <Title key={title.name} title={title.text} />)}
          </div>

          <h1 className='text-lg my-5 lg:my-12 lg:text-3xl'>{subtitle}</h1>

          <SocialIcons />

        </Left>

        <Right flex={5} centerLeft >
          <img 
            src={nathProfilePic}
            alt="nath avec snakes"
            className='pt-20 h-full lg:pt-12'
          />
        </Right>
    </Section>
  )
}

const Title = ({ title }) => {
  return(
    <h1 className="text-5xl w-screen my-4
      lg:text-[5rem] lg:w-full">
      {title}
    </h1>
  )
}

export default Hero