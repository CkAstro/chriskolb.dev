import React, { useState, useEffect, useRef } from 'react';
import { ModalProvider } from './contexts/modal';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/header/navbar';
import ContentPage from './components/contentpage';
import ContentModal from './components/contentmodal';
import '@fontsource/roboto';
import './index.css';      // global import
import { DisplayProvider, useDisplay } from './contexts/display';

const myContent = [
   { 
      title: 'Reversi',
      making: 'React / Express / MongoDB / Websockets',
      image: require('./content/reversi.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'DataVis',
      making: 'WebGL / GLSL / React / Node / REST',
      image: require('./content/datavis.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Neural Network',
      making: 'React / HTML5 Canvas / Canvas',
      image: require('./content/neuralnet.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Supernova Light',
      making: 'WebGL / GLSL / Python / FORTRAN',
      image: require('./content/emission.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Circumstellar Data',
      making: 'HTML5 Canvas / REST / Post-Processing',
      image: require('./content/csm.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Fluid Instabilities',
      making: 'React / WebGL / Fetch API',
      image: require('./content/instability.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
];


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
         <ContentPage scrollValue={scrollValue} styleAdjust={{background: '#ddd'}} title='Projects' content={myContent}/>
         <ContentPage styleAdjust={{background: '#ddd'}} title='Research'  content={myContent}/>
         <ContentPage styleAdjust={{background: '#ddd'}} title='Papers'  content={myContent}/>
         <ContentPage styleAdjust={{background: '#404e5c'}} title='About'  content={myContent}/>
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