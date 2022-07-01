import { Element } from 'react-scroll';
import style from './section.module.css';

const Section = ({ navId, styleAdjust, isContent, children }) => {
   return <Element id={navId.toLowerCase()} style={styleAdjust} className={style.sectionContainer}>
      <div className={`${isContent ? 'contentContainer' : ''} ${style.section}`}>
         {children}
      </div>
   </Element>;
}

export default Section;