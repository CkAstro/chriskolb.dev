import style from './buttongroup.module.css';

const Button = ({ width, isActive, onClick, children }) => (
   <div 
      className={`noselect ${style.button} ${isActive ? style.active : ''} ${width ? style.header : ''}`}
      style={width ? {width: `${width}px`} : null} 
      onClick={onClick}
   >
      {children}
   </div>
);

export default Button;