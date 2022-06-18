import { useState } from 'react';
import FancyButton from '../fancybutton';
import style from './contentsquare.module.css';

const ContentSquare = ({ info, isHidden, onClick }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   return (
      <div className={`${style.contentSquare}`} 
         onClick={onClick}
         onMouseEnter={() => setIsMouseOver(true)}
         onMouseLeave={() => setIsMouseOver(false)}
      >
         <div className={`${style.content} ${isHidden ? style.hidden : null} ${isMouseOver ? style.mouseOver : null}`}>
            <img src={info.image}/>
            <div className={style.topContent}>
               <h1>{info.title}</h1>
               <p>{info.making}</p>
            </div>
            <div className={style.bottomContent}>
               <p>{info.description}</p>
               <FancyButton>Learn More</FancyButton>
            </div>
         </div>
      </div>
   );
}

export default ContentSquare;