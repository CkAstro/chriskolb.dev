import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import ContentSquare from '../contentsquare';
import style from './contentpage.module.css';

const ContentPage = ({ title, styleAdjust, content, scrollValue }) => {
   const [ isHidden, setIsHidden ] = useState(false);

   useEffect(() => {
      setIsHidden(false);
   }, [scrollValue]);

   const buildContent = () => {
      return content.map((item, ind) => {
         return <ContentSquare image={item.image} key={ind} onClick={() => setIsHidden(true)} isHidden={isHidden}/>;
      });
   }

   return (
      <Element id={title.toLowerCase()} style={styleAdjust} className={style.contentPage}>
         <div className='contentContainer'>
            <div className={style.flexContainer}>
            <div className={style.flexContent}>
               {buildContent()}
            </div>
            </div>
         </div>
      </Element>
   );
}

export default ContentPage;