import nathProfilePic from '../../../assets/landing-page/nath-hero.png';

import Section from '../Section';

const Hero = () => {
  return (
    <Section>
        <div className="flex flex-1">

        </div>

        <div className="flex flex-1">
          <img 
            src={nathProfilePic}
            alt="nath avec snakes"
            className='h-3/4'
          />
        </div>
    </Section>
  )
}

export default Hero