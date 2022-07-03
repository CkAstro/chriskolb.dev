import { useRef } from 'react'
import useIsVisible from '../../hooks/useisvisible';
import style from './sketchcard.module.css';

const SketchCard = ({ children }) => {
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   return (
      <div ref={divRef} className={`${style.sketchCard} ${isVisible ? style.active : ''}`}>
         {children}
      </div>
   );
}

const SketchItem = ({ percent, children }) => {
   return (
      <div className={style.sketchItem}>
         <div style={{'--width': `${percent}%`}}className={style.sketchItemBar}>
            {children}
         </div>
      </div>
   );
}

export default { SketchCard, SketchItem };
export { SketchCard, SketchItem };