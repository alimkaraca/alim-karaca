import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMailSent, setIsMailSent] = useState(null); // Initialize to null

  const serviceId = process.env.REACT_APP_MAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_MAIL_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_MAIL_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
      message,
    };

    emailjs.send(
      serviceId,
      templateId,
      formData,
      publicKey
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsMailSent(true);
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setIsMailSent(null);
        }, 5000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsMailSent(false);
        setTimeout(() => {
          setIsMailSent(null);
        }, 5000); 
      });
  };

  return (
    <div className='flex flex-col justify-center relative items-center text-start bg-blue-600 h-full py-24 lg:py-8'>
      <h2 className='text-2xl text-gray-200'>Send me an E-mail</h2>
      <form className='w-4/5 lg:w-2/3' onSubmit={handleSubmit}>
        <div>
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
        <div>
          <textarea 
            className='w-full rounded bg-gray-200 mt-4 p-2'
            placeholder='your message'
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className='grid grid-cols-2'>
        <button type="submit" className='bg-red-600 hover:bg-red-300 text-gray-200 hover:text-gray-800 font-bold py-1 px-4 my-1 mb-3 rounded w-1/2'>Send</button>
        {isMailSent === true && <p className='text-green-200 pt-2'>Email sent successfully :)</p>}
        {isMailSent === false && <p className='text-red-200 pt-2'>Something went wrong :(</p>}
        </div>
      </form>
      <p className='absolute bottom-2 text-white text-xs block xl:hidden'>© 2024 All rights reserved.</p>
    </div>
  );
};

export default EmailForm;
