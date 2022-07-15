import { useState, useContext, createContext } from 'react';

const DisplayContext = createContext();

const DisplayProvider = ({ children }) => {
   const [ isEnabled, setIsEnabled ] = useState(false);

   return (
      <DisplayContext.Provider value={[isEnabled, setIsEnabled]}>
         {children}
      </DisplayContext.Provider>
   );
}

const useDisplay = () => {
   const [ isEnabled, setIsEnabled ] = useContext(DisplayContext);

   const enableItem = itemId => setIsEnabled(itemId);

   return {
      isEnabled, 
      enableItem,
   }
}

export { 
   DisplayProvider, 
   useDisplay 
}