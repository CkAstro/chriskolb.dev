import { useState, useEffect, useRef } from 'react';
import Button from "./button";
import style from './buttongroup.module.css';

const ButtonGroup = ({ header, children }) => {
   const [ headerWidth, setHeaderWidth ] = useState(null);
   const [ activeButton, setActiveButton ] = useState(0);
   const divRef = useRef(null);

   const getButtons = () => {
      return children.map((item, ind) => {
         return <Button key={ind}
            isActive={activeButton === ind}
            onClick={() => setActiveButton(ind)}
         >
            {item.text}
         </Button>;
      });
   }

   const getHeader = header ? <Button width={headerWidth}>{header}</Button> : <div/>;

   useEffect(() => {
      setHeaderWidth(divRef.current.clientWidth / 4.0);
   }, []);

   const gridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${children.length}, 1fr)`,
   }

   return <div ref={divRef} className={style.buttonGroup}>
      {getHeader}
      <div style={gridStyle}>{getButtons()}</div>
   </div>;
}

export default ButtonGroup;