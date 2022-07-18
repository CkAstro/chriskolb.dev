import { useState } from 'react';
import style from './style2.module.css';

const FancyButton = ({ children }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);

   const handleTouch = event => event.stopPropagation();

   return (
      <div className={style.buttonContainer} 
         onMouseEnter={() => setIsMouseOver(true)} 
         onMouseLeave={() => setIsMouseOver(false)}
         onTouchEnd={handleTouch}
      >
         <div className={`${style.buttonContainer__default} ${isMouseOver ? style.mouseOver : ''}`}>{children}</div>
         <div className={`${style.buttonContainer__layer1} ${isMouseOver ? style.mouseOver : ''}`}>{children}</div>
         <div className={`${style['buttonContainer__layer1-cover']} ${isMouseOver ? style.mouseOver : ''}`}>{children}</div>
         <div className={`${style.buttonContainer__layer2} ${isMouseOver ? style.mouseOver : ''}`}>{children}</div>
         {/* <div className={`${style['buttonContainer__layer2-cover']} ${isMouseOver ? style.mouseOver : ''}`}>{children}</div> */}
      </div>
   );
}

export default FancyButton;