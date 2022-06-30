import React, { useState } from 'react';
import { ModalProvider } from './contexts/modal';
import { DisplayProvider } from './contexts/display';
import { MousePositionProvider, useMousePosition } from './contexts/mouseposition';
import ReactDOM from 'react-dom/client';
import Section from './components/section';
import Header from './components/header';
import Navbar from './components/navbar';
import ContentModal from './components/contentmodal';
import About from './content/about';
import Projects from './content/projects';
import Research from './content/research';
import Contact from './content/contact';
import '@fontsource/roboto';
import './index.css';      // global impor

const Main = () => {
   const [ scrollValue, setScrollValue ] = useState(0);
   const { setMousePosition } = useMousePosition();

   const handleScroll = event => setScrollValue(event.target.scrollTop);
   const handleMouseMove = event => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
   }

   return <div id='mainContainer' className='mainContainer' onScroll={handleScroll} onMouseMove={handleMouseMove}>
      <ContentModal/>
      <Navbar scrollValue={scrollValue}/>
      <Section navId='home' styleAdjust={{height: '100vh', background: '#1e1e1e'}}><Header/></Section>
      <Section navId='about' styleAdjust={{minHeight: '100vh', background: 'linear-gradient(#1e1e1e, #0b3ce1)'}}><About/></Section>
      <Section navId='projects' styleAdjust={{background: 'linear-gradient(#0b3ce1, #78e9ff)'}}><Projects/></Section>
      <Section navId='research' styleAdjust={{background: 'linear-gradient(#78e9ff, #fff)'}}><Research/></Section>
      <Section navId='contact' styleAdjust={{minHeight: '100vh'}}><Contact/></Section>
      
   </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ModalProvider>
      <DisplayProvider>
         <MousePositionProvider>
            <Main/>
         </MousePositionProvider>
      </DisplayProvider>
   </ModalProvider>
);