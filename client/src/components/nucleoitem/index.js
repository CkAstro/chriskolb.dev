import { useEffect, useRef, useState } from 'react';
import style from './nucleoitem.module.css';

const NucleoItem = ({ center, disable, mousePos, element, isotope, stable }) => {
   const [ pos, setPos ] = useState({ '--x': '0', '--y': '0' });
   const divRef = useRef(null);

   useEffect(() => {
      if (!divRef.current || !mousePos) return;
      const { top, left } = divRef.current.getBoundingClientRect();
      setPos({
         '--x': `${mousePos.x-left}px`,
         '--y': `${mousePos.y-top}px`,
      });
   }, [mousePos]);

   return <div ref={divRef} style={pos} className={`noselect ${stable ? style.stable : null} ${style.nucleoItemContainer} ${center ? style.center : null} ${disable ? style.disable : null}`}>
      <div className={style.elementContainer}>{element}</div>
      <div className={style.isotopeContainer}>{isotope}</div>
   </div>;
}

export default NucleoItem;