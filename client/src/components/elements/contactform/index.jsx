import { useState } from 'react';
import api from 'api';
import style from './contactform.module.css';

const ContactForm = () => {
   const defaultName = 'Name';
   const defaultEmail = 'Email';
   const defaultMessage = 'Message...';

   const [ name, setName ] = useState(defaultName);
   const [ email, setEmail ] = useState(defaultEmail);
   const [ message, setMessage ] = useState(defaultMessage);
   const [ sentMessage, setSentMessage ] = useState({ name: null, email: null, message: null });

   const handleFocus = event => event.target.select();

   const handleNameChange = event => setName(event.target.value);
   const handleEmailChange = event => setEmail(event.target.value);
   const handleMessageChange = event => setMessage(event.target.value);

   const handleSubmit = event => {
      event.preventDefault();
      if (name === defaultName) return alert('Please enter a name.');
      if (email === defaultEmail) return alert('Please enter an email.');
      if (message === defaultMessage) return alert('Please enter a message.');
      if (name === sentMessage.name && email === sentMessage.email && message === sentMessage.message) return alert('Message already received!');

      const regex = /(^[\w+-\.]+)@((?:[\w]+\.)+)([a-zA-Z]+)/;
      if (!regex.test(email)) return alert('Please enter a valid email. If you see this message in error, contact me directly at astro.cekolb@gmail.com');

      // TODO : lock submission until we get api response
      api.sendUserMessage({ name, email, message }).then(res => {
         if (res.success) setSentMessage({ name, email, message });
         alert(res.message);
      });
   }

   return (
      <div className={style.formContainer}>
         <form onSubmit={handleSubmit}>
            <input type='text'
               className={`${style.nameInput} ${name === defaultName || name === sentMessage.name ? style.inactive : ''}`}
               onFocus={handleFocus} 
               value={name} 
               onChange={handleNameChange}
            />
            <input type='text' 
               className={`${style.emailInput} ${email === defaultEmail || email === sentMessage.email ? style.inactive : ''}`}
               onFocus={handleFocus} 
               value={email} 
               onChange={handleEmailChange}
            />
            <textarea 
               className={`${style.messageInput} ${message === defaultMessage || message === sentMessage.message ? style.inactive : ''}`}
               onFocus={handleFocus} 
               value={message} 
               onChange={handleMessageChange}
               rows={8}
            />
            <div className={style.submitButton} onClick={handleSubmit}>Submit</div>
         </form>
      </div>
   );
}

export default ContactForm;