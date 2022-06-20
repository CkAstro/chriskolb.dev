import { useState } from 'react';
import { useDisplay } from '../../contexts/display';
import { useModal } from '../../contexts/modal';
import FancyButton from '../fancybutton';
import style from './contentsquare.module.css';

const ContentSquare = ({ info, isHidden }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   const { setModalContent } = useModal();
   const { setIsEnabled } = useDisplay();

   const handleClick = () => {
      setModalContent(info.pages);
      setIsEnabled(false);
   }

   return (
      <div className={`${style.contentSquare}`}
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
               <div onClick={handleClick}>
                  <FancyButton.Style1>Learn More</FancyButton.Style1>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContentSquare;