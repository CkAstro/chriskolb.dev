import { useRef } from 'react'
import { useIsVisible } from 'hooks';
import style from './sketchcard.module.css';

const SketchCard = ({ cardDelay='0s', children }) => {
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   return (
      <div ref={divRef} style={{'--card-delay': cardDelay}} className={`${style.sketchCard} ${isVisible ? style.active : ''}`}>
         {children}
      </div>
   );
}

const SketchItem = ({ percent, itemDelay='0s', children }) => (
   <div style={{'--item-delay': itemDelay}} className={style.sketchItem}>
      <div style={{'--width': `${percent}%`}}className={style.sketchItemBar}>
         {children}
      </div>
   </div>
);

export default { SketchCard, SketchItem };
export { SketchCard, SketchItem };