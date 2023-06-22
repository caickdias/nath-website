import Linkedin from './Linkedin';
import Dribble from './Dribble';

const SocialIcons = () => {
  return (
    <div className='flex gap-7'>
      <a 
        href="https://www.linkedin.com/in/nathalia-andrade-rocha/" 
        target="_blank" 
        rel="noreferrer"
        className='hover:scale-110 transition-transform duration-300'
      >
        <Linkedin />
      </a>

      <a 
        href="https://www.linkedin.com/in/nathalia-andrade-rocha/" 
        target="_blank" 
        rel="noreferrer"
        className='hover:scale-110 transition-transform duration-300'
      >
        <Dribble />
      </a>
    </div>
  )
}

export default SocialIcons