import { useState, useContext, createContext } from 'react';

const defaultPosition = {
   x: 200,
   y: window.innerHeight - 200,
   isActive: true,      // required for 'useMeander' hook
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