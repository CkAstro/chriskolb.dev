import { useState } from 'react';
import API from '../../api';
import style from './contactform.module.css';

const ContactForm = () => {
   const [ name, setName ] = useState('Name');
   const [ email, setEmail ] = useState('Email');
   const [ message, setMessage ] = useState('Message...');
   const [ myimg, setMyimg ] = useState(null);

   const handleFocus = event => event.target.select();
   const handleNameChange = event => setName(event.target.value);
   const handleEmailChange = event => setEmail(event.target.value);
   const handleMessageChange = event => setMessage(event.target.value);

   const handleSubmit = event => {
      event.preventDefault();
      API.sendUserMessage({ name, email, message });
      setMyimg(<img style={{display: 'block', margin: '0 auto'}} width='300px' src={'https://c.tenor.com/kGFp0e2m_RsAAAAS/success.gif'}/>);
   }

   return <form style={{margin: '0 auto'}} onSubmit={handleSubmit}>
      <input type='text' 
         onFocus={handleFocus} 
         value={name} 
         onChange={handleNameChange}
      />
      <input type='text' 
         onFocus={handleFocus} 
         value={email} 
         onChange={handleEmailChange}
      />
      <input type='text' 
         onFocus={handleFocus} 
         value={message} 
         onChange={handleMessageChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {myimg}
   </form>;
}

export default ContactForm;