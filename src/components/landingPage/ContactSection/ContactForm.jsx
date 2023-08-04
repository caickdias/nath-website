import { useForm } from 'react-hook-form';

const ContactForm = ({ onSubmit }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    const validateEmail = str => {
        const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const emailIsValid = emailRegex.test(str);        

        return emailIsValid;
    }

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col mt-12 w-screen px-12'
        >
            
            <label className='font-bold text-xs leading-loose'>Name*</label>
            <input 
                type="text"
                    className='mb-6 px-2 w-full h-10 mt-2 bg-[#191B1C] rounded-2xl'
                {...register("name", { required: true })}
            />

            <label className='font-bold text-xs leading-loose'>Email*</label>
            <input 
                type="email"
                    className='mb-6 px-2 w-full h-10 mt-2 bg-[#191B1C] rounded-2xl'
                {...register("email", { required: true, validate: validateEmail })}
            />

            <label className='font-bold text-xs leading-loose'>Message*</label>
            <textarea
                className='mb-6 px-2 w-full mt-2 bg-[#191B1C] rounded-2xl'
                rows={4}
                {...register("message", { required: true })}
            />

            <button
                type="submit"
                className='border-main-white border-[1px] px-[14px] py-[10px] rounded-full w-fit
                    hover:bg-main-white hover:text-background transition-all duration-300'
            >
                Send
            </button>

        </form>
    )
}

export default ContactForm