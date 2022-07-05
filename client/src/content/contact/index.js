import ContactForm from "../../components/contactform";
import style from './contact.module.css';
import Icons from '../../components/icons';
import api from "../../api";

const Contact = () => {
   return <>
      <div className={style.headerContainer}>
         <h1 className={style.style1}>Contact</h1>
         <p><a href={`${api.baseUrl}/resume`} target='_blank'>View my resume.</a></p>
         <p>Have a question or want to work together?</p>
      </div>
      <ContactForm/>
      <Footer/>
   </>;
}

const Footer = () => {

   return <div className={style.footer}>
      <a href='https://github.com/CkAstro' target='_blank'><Icons.GitHub size={24}/></a>
      <a href='https://www.linkedin.com/in/christopher-kolb-071334232/' target='_blank'><Icons.LinkedIn size={24}/></a>
      <div className={style.email}>astro.cekolb@gmail.com</div>
      <div className={style.resume}><a href={`${api.baseUrl}/resume`} target='_blank'>resume</a></div>
      <div className={style.copyright}>Site design by me. Copyright Christopher Kolb, 2022</div>
   </div>;
}

export default Contact;