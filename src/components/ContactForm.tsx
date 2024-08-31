// src/components/ContactForm.tsx

import React, { useState } from 'react';
import { API } from 'aws-amplify';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Replace 'yourApiName' with the actual name of your API
      await API.post('yourApiName', '/contact', { body: formState });
      alert('Thank you for joining the movement!');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <section id="contact">
      <h2>Join the Movement</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formState.name}
          onChange={handleChange}
          placeholder="Your Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formState.email}
          onChange={handleChange}
          placeholder="Your Email" 
          required 
        />
        <textarea 
          name="message" 
          value={formState.message}
          onChange={handleChange}
          placeholder="Your Message" 
          required
        ></textarea>
        <button type="submit">Join the Colorful Cause</button>
      </form>
    </section>
  );
}

export default ContactForm;