import React, { useState } from 'react';
import { ModalProvider } from './contexts/modal';
import { DisplayProvider, useDisplay } from './contexts/display';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/header/navbar';
import ContentModal from './components/contentmodal';
import Projects from './content/projects';
import '@fontsource/roboto';
import './index.css';      // global impor

const Main = () => {
   const [ scrollValue, setScrollValue ] = useState(0);
   const { setIsEnabled } = useDisplay();

   const handleScroll = event => {
      setScrollValue(event.target.scrollTop);
      setIsEnabled(true);
   }

   return (<>
      <ContentModal/>
      <div className='mainContainer snap' 
         id='mainContainer' 
         onScroll={handleScroll}
      >
         <Header/>
         <Navbar scrollValue={scrollValue}/>
         <Projects/>
         <Projects/>
         <Projects/>
         <Projects/>
      </div>
   </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ModalProvider>
         <DisplayProvider>
            <Main/>
         </DisplayProvider>
      </ModalProvider>
   </React.StrictMode>
);