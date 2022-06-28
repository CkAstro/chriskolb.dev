import { useState } from 'react';
import style from './fancybutton.module.css';

const FancyButton = ({ children }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   
   const handleTouch = event => event.stopPropagation();

   return (
      <div className={`noselect ${style.buttonContainer}`} 
         onMouseEnter={() => setIsMouseOver(true)} 
         onMouseLeave={() => setIsMouseOver(false)}
         onTouchEnd={handleTouch}
      >
         <div className={`${style.normalButton1} ${isMouseOver ? style.hover : null}`}>{children}</div>
         <div className={`${style.hoverButton1} ${isMouseOver ? style.hover : null}`}>{children}</div>
      </div>
   );
}

export default FancyButton;