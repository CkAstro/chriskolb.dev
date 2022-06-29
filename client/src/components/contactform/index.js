import { useState } from 'react';
import API from '../../api';
import style from './contactform.module.css';

const ContactForm = () => {
   const [ name, setName ] = useState('Name');
   const [ email, setEmail ] = useState('Email');
   const [ message, setMessage ] = useState('Message...');

   const handleFocus = event => event.target.select();
   const handleNameChange = event => setName(event.target.value);
   const handleEmailChange = event => setEmail(event.target.value);
   const handleMessageChange = event => setMessage(event.target.value);

   const handleSubmit = event => {
      event.preventDefault();
      API.sendUserMessage({ name, email, message });
   }

   return <form onSubmit={handleSubmit}>
      <input type='text' 
         autoFocus onFocus={handleFocus} 
         value={name} 
         onChange={handleNameChange}
      />
      <input type='text' 
         autoFocus onFocus={handleFocus} 
         value={email} 
         onChange={handleEmailChange}
      />
      <input type='text' 
         autoFocus onFocus={handleFocus} 
         value={message} 
         onChange={handleMessageChange}
      />
      <button onClick={handleSubmit}>Submit</button>
   </form>;
}

export default ContactForm;