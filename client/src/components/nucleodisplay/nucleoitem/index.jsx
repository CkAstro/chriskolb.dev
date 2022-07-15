import { memo } from 'react';
import style from './nucleoitem.module.css';

const EmptyItem = memo(() => <div className={style.nucleoItemContainer} style={{background: 'var(--color-black)'}}/>);

const NucleoItem = ({ props, isMouseOver }) => {
   const { element, isotope, proton, stable } = props; 

   return <div className={`
      noselect 
      ${stable ? style.stable : ''} 
      ${style.nucleoItemContainer} 
      ${isMouseOver ? style.mouseOver : ''}
   `}>
      <div className={style.background}/>
      <div className={style.border}/>
      <div className={style.elementContainer}>{element}</div>
      <div className={style.isotopeContainer}>{isotope}</div>
      <div className={style.protonContainer}>{proton}</div>
   </div>;
}

export default memo(NucleoItem);
export { EmptyItem };