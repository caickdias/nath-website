import Linkedin from './Linkedin';
import Dribble from './Dribble';

const SocialIcons = () => {
  return (
    <div className='flex gap-1 lg:gap-7 -ml-2'>
      <a 
        href="https://www.linkedin.com/in/nathalia-andrade-rocha/" 
        target="_blank" 
        rel="noreferrer"
        className='scale-[0.7] hover:scale-110 transition-transform duration-300
          lg:scale-100'
      >
        <Linkedin />
      </a>

      <a
        href="https://www.linkedin.com/in/nathalia-andrade-rocha/" 
        target="_blank" 
        rel="noreferrer"
        className='scale-[0.7] hover:scale-110 transition-transform duration-300
          lg:scale-100'
      >
        <Dribble />
      </a>
    </div>
  )
}

export default SocialIcons