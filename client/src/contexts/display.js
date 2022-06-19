import { useState, useContext, createContext } from 'react';

const DisplayContext = createContext();

const DisplayProvider = ({ children }) => {
   const [ isEnabled, setIsEnabled ] = useState(true);

   return (
      <DisplayContext.Provider value={[isEnabled, setIsEnabled]}>
         {children}
      </DisplayContext.Provider>
   );
}

const useDisplay = () => {
   const [ isEnabled, setIsEnabled ] = useContext(DisplayContext);

   return {
      isEnabled, 
      setIsEnabled,
   }
}

export { 
   DisplayProvider, 
   useDisplay 
}