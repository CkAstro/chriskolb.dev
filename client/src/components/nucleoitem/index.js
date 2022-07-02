import { memo } from 'react';
import style from './nucleoitem.module.css';

const EmptyItem = memo(() => <div className={style.nucleoItemContainer} style={{background: 'none'}}/>);

const NucleoItem = ({ props, isMouseOver, isDisabled, setStyle }) => {
   const { element, isotope, proton, stable } = props; 

   return <div style={setStyle} 
      className={`noselect ${stable ? style.stable : ''} ${style.nucleoItemContainer} ${isDisabled ? style.disable : null} ${isMouseOver ? style.mouseOver : null}`}
   >
      <div className={style.background}/>
      <div className={style.border}/>
      <div className={style.elementContainer}>{element}</div>
      <div className={style.isotopeContainer}>{isotope}</div>
      <div className={style.protonContainer}>{proton}</div>
   </div>;
}

export default memo(NucleoItem);
export { EmptyItem };