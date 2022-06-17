import { Element } from 'react-scroll';
import style from './contentpage.module.css';

const ContentPage = ({ title, children }) => {
   return (
      <Element id={title.toLowerCase()} className={style.contentPage}>
         <div className={`contentContainer ${style.flexContent}`}>
            {children}
         </div>
      </Element>
   );
}

export default ContentPage;