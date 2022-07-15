import { Icons } from 'components/elements';
import api from 'api';
import style from './contact.module.css';

const Footer = () => (
   <div className={style.footer}>
      <a href='https://github.com/CkAstro' target='_blank'><Icons.GitHub size={24}/></a>
      <a href='https://www.linkedin.com/in/christopher-kolb-071334232/' target='_blank'><Icons.LinkedIn size={24}/></a>
      <div className={style.email}>astro.cekolb@gmail.com</div>
      <div className={style.resume}><a href={`${api.baseUrl}/resume`} target='_blank'>resume</a></div>
      <div className={style.copyright}>Site design by me. Copyright Christopher Kolb, 2022</div>
   </div>
);

export default Footer;