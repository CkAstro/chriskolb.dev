import { Element } from 'react-scroll';
import style from './section.module.css';

const Section = ({ navId, styleAdjust, children }) => {

   return <Element id={navId.toLowerCase()} style={styleAdjust} className={style.sectionContainer}>
      <div className={`contentContainer ${style.section}`}>
         {children}
      </div>
   </Element>;
}

export default Section;