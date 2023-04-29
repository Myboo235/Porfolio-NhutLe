import React, { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e)=>{
    preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className='h-[100vh]'>
      <div className='h-2/3 grid lg:grid-cols-2 items-center justify-items-center'>
        <form ref={form} className='grid md:w-1/2'>
          <label htmlFor="" className='my-2'>
            <span className='text-md text-white'>Your name</span>
            <input type="text" className="rounded text-pink-500 w-full" />
          </label>
          <label htmlFor="" className='my-2'>
            <span className='text-md text-white'>Your email</span>
            <input type="text" className="rounded text-pink-500 w-full" />
          </label>
          <label htmlFor="" >
            <span className='text-md text-white'>Your comment</span>
            <textarea className="mt-1 block w-full" rows="3"></textarea>          
          </label>
          <label htmlFor="" className='mt-5'>
            <button type="submit" className="rounded-full p-2 bg-white w-full">Submit</button>
          </label>
          
        </form>
        <div>
          <div className='mt-[8rem] '>
            <iframe className='max-w-[30rem] h-[20rem] md:h-[30rem] w-[40rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.12045546699!2d108.20636587479852!3d16.05923788461885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b6a647b1a9%3A0xfc519afb65b57bf3!2sMy%20coffee!5e0!3m2!1svi!2s!4v1682755825952!5m2!1svi!2s" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact