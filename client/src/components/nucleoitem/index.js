import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../../contexts/mouseposition';
import style from './nucleoitem.module.css';

const NucleoItem = ({ center, element, isotope, decayType }) => {
   const [ pos, setPos ] = useState({ '--x': '0', '--y': '0' });
   const [ isDisabled, setIsDisabled ] = useState(true);
   const { mousePosition } = useMousePosition();

   const divRef = useRef(null);

   let color;
   if (decayType === 1) {
      color = style.stable;
   } else if (decayType === 2) {
      color = style.beta;
   } else if (decayType === 3) {
      color = style.alpha;
   } else if (decayType === 4) {
      color = style.EC;
   }

   useEffect(() => {
      if (!divRef.current || !mousePosition) return;
      const { top, left, width, height } = divRef.current.getBoundingClientRect();
      const dx = mousePosition.x - left - width/2;
      const dy = mousePosition.y - top - height/2;
      if (dx*dx+dy*dy > 264*264) return setIsDisabled(true);
      if (isDisabled) setIsDisabled(false);
      setPos({
         '--x': `${mousePosition.x-left-width/2}px`,
         '--y': `${mousePosition.y-top-height/2}px`,
      });
   }, [mousePosition]);

   return <div ref={divRef} style={pos} className={`noselect ${color} ${style.nucleoItemContainer} ${center ? style.center : null} ${isDisabled ? style.disable : null}`}>
      <div className={style.elementContainer}>{element}</div>
      <div className={style.isotopeContainer}>{isotope}</div>
   </div>;
}

export default NucleoItem;