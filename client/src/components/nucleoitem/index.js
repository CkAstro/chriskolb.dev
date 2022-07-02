import { useEffect, useRef, useState, memo } from 'react';
import { useMousePosition } from '../../contexts/mouseposition';
import style from './nucleoitem.module.css';

const EmptyItem = memo(() => <div className={style.nucleoItemContainer} style={{background: 'none'}}/>);

const NucleoItem = ({ element, isotope, proton, stable, isMouseOver, isDisabled, setStyle }) => {

   return <div style={setStyle} 
      className={`noselect ${stable ? style.stable : ''} ${style.nucleoItemContainer} ${isDisabled ? style.disable : null} ${isMouseOver ? style.mouseOver : null}`}
   >
      {console.log('rerendered item')}
      <div className={style.background}/>
      <div className={style.border}/>
      <div className={style.elementContainer}>{element}</div>
      <div className={style.isotopeContainer}>{isotope}</div>
      <div className={style.protonContainer}>{proton}</div>
   </div>;
}

export default memo(NucleoItem);
export { EmptyItem };