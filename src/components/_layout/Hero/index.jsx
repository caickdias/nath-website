import nathProfilePic from '../../../assets/landing-page/nath-hero.png';

import { Section, Left, Right } from '../../Section';

const Hero = () => {
  return (
    <Section>
        <Left flex={4} centerLeft >
          <div>
            <Title title="UX/UI Designer." />
            <Title title="Photographer." />
            <Title title="Polyglot wizard." />
          </div>

          <h1>Paris-based. Brazilian roots. NY education.</h1>

          <div></div>
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
    <h1 className='text-[5.4rem] font-quattro tracking-[3px]'>
      {title}
    </h1>
  )
}

export default Hero