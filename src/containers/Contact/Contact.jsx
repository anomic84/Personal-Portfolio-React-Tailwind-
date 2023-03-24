import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_24pxcl3',
      'template_w1e3drq',
      form.current,
      'B7klr1udw6fN0xTAL')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent!");
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>

      <div className="flex justify-center pt-8 " id="contact">
        <h1 className="text-[28px] sm:text-[48px] md:text-[56px] sm:leading-[56px] md:leading-[72px] font-bold inline-block bg-gradient-to-r  from-scred to-scredhover text-transparent bg-clip-text 
      mb-[8px] pt-[16px] sm:pt-[40px] md:pt-[58px] pb-[8px]  max-w-full sm:mb-[20px] md:mb-[16px] text-center">Get in touch</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col  px-8 py-2'>
        <div className="w-[90%] md:w-[80%] lg:w-[65%] max-w-[1024px] mx-auto flex flex-col">
          <label className="text-scred text-[20px] sm:text-[22px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[30px] pb-1">Name</label>
          <input type="text" name="user_name" className="rounded bg-[#d4c0c0] border border-scred text-slate-800 font-[500] p-1" />
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[65%] max-w-[1024px] mx-auto flex flex-col">
          <label className="text-scred text-[20px] sm:text-[22px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[30px] pb-1 pt-2">Email</label>
          <input type="email" name="user_email" className="rounded bg-[#d4c0c0] border border-scred text-slate-800 font-[500] p-1" />
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[65%] max-w-[1024px] mx-auto flex flex-col">
          <label className="text-scred text-[20px] sm:text-[22px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[30px] pb-1 pt-2">Message</label>
          <textarea name="message" className="rounded bg-[#d4c0c0] border border-scred text-slate-800 font-[500] p-1" />
        </div>
        <div className="flex justify-center pt-2">
          <input type="submit" value="Send" className="mb-8 rounded bg-scred text-projcolor w-[40%] sm:w-[25%] p-2" />
        </div>
      </form>

    </>
  );
};

export default Contact