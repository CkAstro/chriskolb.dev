import React, { useState } from 'react';
import { ModalProvider } from './contexts/modal';
import { DisplayProvider } from './contexts/display';
import { MousePositionProvider } from './contexts/mouseposition';
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

   const handleScroll = event => setScrollValue(event.target.scrollTop);

   return <div id='mainContainer' className='mainContainer' onScroll={handleScroll}>
      <ContentModal/>
      <Navbar scrollValue={scrollValue}/>
      <Section navId='home' styleAdjust={{height: '100vh', background: '#1e1e1e', paddingTop: '0'}}><Header/></Section>
      <Section navId='about' isContent styleAdjust={{minHeight: '100vh', background: '#152b73'}}><About/></Section>
      <Section navId='projects' isContent styleAdjust={{background: '#618985'}}><Projects/></Section>
      <Section navId='research' isContent styleAdjust={{background: '#FBF9FF'}}><Research/></Section>
      <Section navId='contact' isContent styleAdjust={{minHeight: '100vh', background: '#568EA3'}}><Contact/></Section>
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