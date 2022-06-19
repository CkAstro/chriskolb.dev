import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { useDisplay } from '../../contexts/display';
import ContentSquare from '../contentsquare';
import style from './contentpage.module.css';

const ContentPage = ({ title, styleAdjust, content }) => {
   const [ isHidden, setIsHidden ] = useState(false);
   const { isEnabled, setIsEnabled } = useDisplay();

   useEffect(() => {
      if (isEnabled) return setIsHidden(false);
      return setIsHidden(true);
   }, [isEnabled]);

   const handleClick = () => {
      setIsHidden(true);
      setIsEnabled(false);
   }

   const buildContent = () => {
      return content.map((item, ind) => {
         return <ContentSquare info={item} key={ind} isHidden={isHidden}/>;
      });
   }

   return (
      <Element id={title.toLowerCase()} style={styleAdjust} className={style.contentPage}>
         <div className='contentContainer'>
            <div className={style.flexContainer}>
               <h1>{title}</h1>
               <div className={style.flexContent}>
                  {buildContent()}
               </div>
            </div>
         </div>
      </Element>
   );
}

export default ContentPage;