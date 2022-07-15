import { useState, useContext, createContext } from 'react';

const defaultPosition = {
   x: 0,
   y: 0,
}

const MousePositionContext = createContext();

const MousePositionProvider = ({ children }) => {
   const [ mousePosition, setMousePosition ] = useState(defaultPosition);

   return (
      <MousePositionContext.Provider value={[mousePosition, setMousePosition]}>
         {children}
      </MousePositionContext.Provider>
   );
}

const useMousePosition = () => {
   const [ mousePosition, setMousePosition ] = useContext(MousePositionContext); 

   return {
      mousePosition,
      setMousePosition,
   }
}

export { MousePositionProvider, useMousePosition };