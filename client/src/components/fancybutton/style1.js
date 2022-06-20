import { useState } from 'react';
import style from './fancybutton.module.css';

const FancyButton = ({ children }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);

   return (
      <div className={style.buttonContainer} 
         onMouseEnter={() => setIsMouseOver(true)} 
         onMouseLeave={() => setIsMouseOver(false)}
      >
         <div className={`${style.normalButton} ${isMouseOver ? style.hover : null}`}>{children}</div>
         <div className={`${style.hoverButton} ${isMouseOver ? style.hover : null}`}>{children}</div>
      </div>
   );
}

export default FancyButton;