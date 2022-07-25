import { Icons } from 'components/elements';
import api from 'api';
import style from './contact.module.css';

const Footer = () => (
   <div className={style.footer}>
      <div className={style.linkContainer}>
         <div alt='View me on Github' onClick={() => window.open('https://github.com/CkAstro', '_blank')}>
            <Icons.GitHub size={24}/>
         </div>
         <div className={style.resume}><a href={`${api.baseUrl}/resume`} target='_blank'>resume</a></div>
         <div alt='View me on LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/christopher-kolb-071334232/', '_blank')}>
            <Icons.LinkedIn size={24}/>
         </div>
      </div>
      {/* <div className={style.email}>astro.cekolb@gmail.com</div> */}
      <div className={style.copyright}>Copyright Christopher Kolb, 2022. Site design by me.</div>
   </div>
);

export default Footer;