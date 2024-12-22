import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: rgba(255, 255, 255, 0.1); 
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    color: var(--white);
  }

  input,
  textarea {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--white);
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.2); 
    color: var(--white);
  }

  button {
    background-color: var(--red);
    color: var(--white);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          rows="5" 
          required 
        />

        <button type="submit">Submit</button>
      </StyledForm>
    </div>
  );
};

export default Contact;