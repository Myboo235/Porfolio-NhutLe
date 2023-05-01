import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [error,setError]= useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setError(false);
      }, (error) => {
          console.log(error.text);
          setError(true);
      });
  }

  return (
    <section className=''>
      <div className='h-2/3 grid lg:grid-cols-2 items-center justify-items-center'>
        <form ref={form} onSubmit={handleSubmit} className='grid md:w-1/2'>
          <label htmlFor="name" className='my-2'>
            <span className='text-md text-white'>Your name</span>
          </label>
          <input required type="text" className="rounded text-pink-500 w-full" name='from_name'/>

          <label htmlFor="email" className='my-2'>
            <span className='text-md text-white'>Your email</span>
          </label>
          <input required type="text" className="rounded text-pink-500 w-full" name='email'/>

          <label htmlFor="message" >
            <span className='text-md text-white'>Your comment</span>
          </label>
          <textarea required className="mt-1 block w-full" rows="3" name='message'></textarea>          

          <button onClick={handleSubmit} className="mt-5 rounded-full p-2 bg-white w-full">Submit</button>
          <span className='text-md text-white'>
            {error==false && "Email send successlly" }
          </span>
        </form>
        <div>
          <div className='my-[8rem] '>
            <iframe 
              className='max-w-[30rem] h-[20rem] md:h-[30rem] w-[40rem]' 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.12045546699!2d108.20636587479852!3d16.05923788461885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b6a647b1a9%3A0xfc519afb65b57bf3!2sMy%20coffee!5e0!3m2!1svi!2s!4v1682755825952!5m2!1svi!2s" 
              style={{border:0}} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact