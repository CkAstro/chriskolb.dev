import { useState } from 'react';
import { useModal } from '../../contexts/modal';
import style from './fancybutton.module.css';

const FancyButton = ({ children }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   const { setModalContent } = useModal();
   return (
      <div className={style.buttonContainer} 
         onMouseEnter={() => setIsMouseOver(true)} 
         onMouseLeave={() => setIsMouseOver(false)}
         onClick={() => setModalContent(<p>Hello World</p>)}
      >
         <div className={`${style.normalButton} ${isMouseOver ? style.hover : null}`}>{children}</div>
         <div className={`${style.hoverButton} ${isMouseOver ? style.hover : null}`}>{children}</div>
      </div>
   );
}

export default FancyButton;