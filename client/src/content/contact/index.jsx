import { ContactForm } from 'components/elements';
import Footer from './footer';
import api from 'api';
import style from './contact.module.css';

const Contact = () => (
   <>
      <div className={style.headerContainer}>
         <h1 className={style.style1}>Contact <span style={{fontWeight: '100'}}>Me</span></h1>
         <p>Interested in working together or have a question? Let me know!</p>
         <p><a href={`${api.baseUrl}/resume`} target='_blank'>View my resume here.</a></p>
      </div>
      <ContactForm/>
      <Footer/>
   </>
);

export default Contact;