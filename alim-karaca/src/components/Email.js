import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
      message
    };

    emailjs.send(
      'service_bxfkoq9',
      'template_o4r1oas',
      formData,
      'd9Q9NCiR-Y1TbHz7C' 
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email successfully sent!');
      setEmail('');
      setMessage('');
    }).catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className='flex flex-col justify-center relative items-center text-start bg-blue-600 h-full py-24 lg:py-8'>
      <h2 className='text-2xl text-gray-200'>Send me an Email</h2>
      <form className='w-4/5 lg:w-2/3 ' onSubmit={handleSubmit}>
        <div >
          <input 
            className='w-full rounded bg-gray-200 mt-4 p-2'
            placeholder='your email'
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div >
          <textarea 
             className='w-full rounded bg-gray-200 mt-4 p-2'
            placeholder='your message'
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='bg-red-600 hover:bg-red-300 text-gray-200 hover:text-gray-800 font-bold py-1 px-4 my-1 mb-3 rounded'>Send</button>
      </form>
      <p className='absolute bottom-2 text-white text-xs'>© 2024 All rights reserved.</p>
    </div>
  );
};

export default EmailForm;
