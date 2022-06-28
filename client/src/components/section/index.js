// import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
// import { useDisplay } from '../../contexts/display';
// import ContentSquare from '../contentsquare';
import style from './section.module.css';

const Section = ({ navId, styleAdjust, children }) => {
   // const [ isHidden, setIsHidden ] = useState(false);
   // const { isEnabled, setIsEnabled } = useDisplay();

   // useEffect(() => {
   //    if (isEnabled) return setIsHidden(false);
   //    return setIsHidden(true);
   // }, [isEnabled]);

   // const buildContent = () => {
   //    return content.map((item, ind) => {
   //       return <ContentSquare info={item} key={ind} isHidden={isHidden}/>;
   //    });
   // }

   return <Element id={navId.toLowerCase()} style={styleAdjust} className={style.sectionContainer}>
      <div className={`contentContainer ${style.section}`}>
         {children}
      </div>
   </Element>;
}

export default Section;