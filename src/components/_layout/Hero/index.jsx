import nathProfilePic from '../../../assets/landing-page/nath-hero.png';

import Section from '../Section';

const Hero = () => {
  return (
    <Section>
        <div className="flex flex-[4]">

        </div>

        <div className="flex flex-[5] items-center">
          <img 
            src={nathProfilePic}
            alt="nath avec snakes"
            className='h-3/4 mb-36'
          />
        </div>
    </Section>
  )
}

export default Hero