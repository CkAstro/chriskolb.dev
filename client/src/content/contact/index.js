import ContactForm from "../../components/contactform";
import style from './contact.module.css';

const Contact = () => {
   return <>
      <h1>Contact</h1>
      <p className={style.centerText}>Have a question or want to work together?</p>
      <ContactForm/>
   </>;
}

export default Contact;