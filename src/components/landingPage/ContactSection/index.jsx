import { title, subtitle, contactImage, description, email } from '../../../data/landing-page/contact';
import SquaresBg from '../../SquaresBg';

import { contact } from '../../../data/landing-page/squares';
import { Left, Right } from "../../_layout/Section"
import ContactForm from './ContactForm';

const ContactSection = () => {
    return(
        <section className="relative flex flex-col w-screen" id="contact">
            <Left>

                <SquaresBg squares={contact} />

                <div className='absolute h-24 rounded-2xl w-24 top-[25%] left-50 shadow-[0px_0_180px_#BDC9D2] bg-[#383838] blur-xl z-0'></div>

                <h1 className='text-5xl leading-normal'>{title}</h1>
                <h1 className='text-base leading-loose'>{subtitle}</h1>

                <img 
                    src={contactImage}
                    alt="contact image"
                    className='w-2/5 my-6 z-10'
                />

                <h1 className='text-base leading-loose'>{description}</h1>
                <a href={`mailto:${email}`} target='_blank' rel="noreferrer" className='text-base leading-loose underline'>
                    {email}
                </a>
            </Left>

            <Right>
                <ContactForm />
            </Right>
        </section>
    )
}

export default ContactSection