import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ from_name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus('Failed to send message.');
      });
  };
  

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <div className='containerName'>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className='inputName'
          placeholder='Name...'
          />
      </div>
      <div className="containerAroundInputs">
        <div className='emailPhone'>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email...'
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div className='emailPhone'>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder='Phone...'
            value={formData.phone}
            onChange={handleChange}
            required
            />
        </div>
      </div>
      <div>
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          id="message"
          name="message"
          placeholder='Type your message here...'
          value={formData.message}
          onChange={handleChange}
          required
          ></textarea>
      </div>
      <button className='submitEmail' type="submit">Submit</button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
