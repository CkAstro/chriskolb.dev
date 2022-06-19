import { useState } from 'react';
import { useDisplay } from '../../contexts/display';
import { useModal } from '../../contexts/modal';
import style from './fancybutton.module.css';

const FancyButton = ({ children }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   const { setModalContent } = useModal();
   const { setIsEnabled } = useDisplay();

   const handleClick = () => {
      setModalContent(<p>Hello World</p>);
      setIsEnabled(false);
   }

   return (
      <div className={style.buttonContainer} 
         onMouseEnter={() => setIsMouseOver(true)} 
         onMouseLeave={() => setIsMouseOver(false)}
         onClick={handleClick}
      >
         <div className={`${style.normalButton} ${isMouseOver ? style.hover : null}`}>{children}</div>
         <div className={`${style.hoverButton} ${isMouseOver ? style.hover : null}`}>{children}</div>
      </div>
   );
}

export default FancyButton;