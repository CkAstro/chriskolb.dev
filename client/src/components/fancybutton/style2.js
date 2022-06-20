import { useState } from 'react';
import style from './fancybutton.module.css';

const FancyButton = ({ children }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);

   return (
      <div className={style.buttonContainer} 
         onMouseEnter={() => setIsMouseOver(true)} 
         onMouseLeave={() => setIsMouseOver(false)}
      >
         <div className={`${style.normalButton2} ${isMouseOver ? style.hover : null}`}>{children}</div>
         <div className={`${style.hoverButton2} ${isMouseOver ? style.hover : null}`}>{children}</div>
         <div className={`${style.extraButton2} ${isMouseOver ? style.hover : null}`}>{children}</div>
         <div className={`${style.coverButton2} ${isMouseOver ? style.hover : null}`}>{children}</div>
      </div>
   );
}

export default FancyButton;