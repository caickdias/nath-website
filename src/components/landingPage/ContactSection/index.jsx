import { title, subtitle, contactImage, description, email } from '../../../data/landing-page/contact';

import { Left, Right } from "../../_layout/Section"
import ContactForm from './ContactForm';

const ContactSection = () => {
    return(
        <section className="flex flex-col w-screen">
            <Left>
                <h1 className='text-5xl leading-normal'>{title}</h1>
                <h1 className='text-base leading-loose'>{subtitle}</h1>

                <img 
                    src={contactImage}
                    alt="contact image"
                    className='w-2/4 my-6'
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