import style from './buttongroup.module.css';

const Button = ({ width, isActive, onClick, children }) => {
   const buttonStyle = width ? {width: `${width}px`} : null;
   return <div 
      className={`noselect ${style.button} ${isActive ? style.active : null} ${width ? style.header : null}`}
      style={buttonStyle} 
      onClick={onClick}
   >
      {children}
   </div>;
}

export default Button;