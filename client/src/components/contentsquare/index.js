import { useState } from 'react';
import style from './contentsquare.module.css';

const ContentSquare = ({ image, isHidden, onClick }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   return (
      <div className={`${style.contentSquare}`} 
         onClick={onClick}
         onMouseEnter={() => setIsMouseOver(true)}
         onMouseLeave={() => setIsMouseOver(false)}
      >
         <div className={`${style.content} ${isHidden ? style.hidden : null} ${isMouseOver ? style.mouseOver : null}`}>
            <img src={image}/>
            <div className={style.topContent}>
               <h1>Reversi</h1>
               <p>React / Whatever</p>
            </div>
            <div className={style.bottomContent}>
               <p>This is a bunch of text dawg here is some more text</p>
               <div className={style.learnMoreButton}>Learn More</div>
            </div>
         </div>
      </div>
   );
}

export default ContentSquare;