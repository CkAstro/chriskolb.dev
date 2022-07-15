import { ContactForm } from 'components/elements';
import Footer from './footer';
import api from 'api';
import style from './contact.module.css';

const Contact = () => (
   <>
      <div className={style.headerContainer}>
         <h1 className={style.style1}>Contact</h1>
         <p><a href={`${api.baseUrl}/resume`} target='_blank'>View my resume.</a></p>
         <p>Have a question or want to work together?</p>
      </div>
      <ContactForm/>
      <Footer/>
   </>
);

export default Contact;