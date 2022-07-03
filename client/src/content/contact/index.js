import ContactForm from "../../components/contactform";
import style from './contact.module.css';

const Contact = () => {
   return <>
      <div className={style.headerContainer}>
         <h1 className={style.style1}>Contact</h1>
      </div>
      <p className={style.centerText}>Have a question or want to work together?</p>
      <ContactForm/>
   </>;
}

export default Contact;