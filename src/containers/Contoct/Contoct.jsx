import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import FormInput from '../../components/FormInput'

const Contoct = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage: "Name Needed!",
            label: "Name",
          
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "message",
            type: "test",
            placeholder: "Message",
            errorMessage: "Message Needed!",
            label: "Message",
          
            required: true,
        }
    ]



    const onChange = (e) => {
        console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    // Emailjs
    const form = useRef();
    const [showMessage, setShowMessage] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        setTimeout(() => { setShowMessage(false) }, 5000)
        emailjs.sendForm(
            'service_24pxcl3',
            'template_w1e3drq',
            form.current,
            'B7klr1udw6fN0xTAL')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent!");
                setShowMessage(true)

                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

    };


    console.log(values);
    return (
        <div>
            <div className="flex justify-center pt-8 " id="contact">
                <h1 className="text-[28px] sm:text-[48px] md:text-[56px] sm:leading-[56px] md:leading-[72px] font-bold inline-block bg-gradient-to-r  from-scred to-scredhover text-transparent bg-clip-text 
      mb-[8px] pt-[16px] sm:pt-[40px] md:pt-[58px] pb-[8px]  max-w-full sm:mb-[20px] md:mb-[16px] text-center">Get in touch</h1>
            </div>
            <form ref={form} className='flex flex-col px-8 py-2' onSubmit={sendEmail}>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button className="my-8 mx-auto  rounded bg-scred text-projcolor w-[40%] sm:w-[25%] p-2">Submit</button>
                {showMessage && <p className="messagesentbg text-scredhover text-lg py-1 duration-300 sm:w-[25%] sm:self-center">Message Sent!</p>}
            </form>
        </div>
    )
}

export default Contoct