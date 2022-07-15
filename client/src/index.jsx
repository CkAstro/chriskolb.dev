import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider, DisplayProvider, MousePositionProvider } from 'contexts'
import { ContentModal, Section } from 'components/containers';
import { Navbar } from 'components/elements';
import { Header, About, Projects, Research, Contact } from 'content';
import './index.css';      // global import

const Main = () => {
   const [ scrollValue, setScrollValue ] = useState(0);

   const handleScroll = event => setScrollValue(event.target.scrollTop);

   return <div id='mainContainer' className='mainContainer' onScroll={handleScroll}>
      <ContentModal/>
      <Navbar scrollValue={scrollValue}/>
      <Section navId='home' styleAdjust={{height: '100vh', background: 'var(--color-black)', paddingTop: '0'}}><Header/></Section>
      <Section navId='about' isContent styleAdjust={{minHeight: 'min(100vh, 1440px)', maxHeight: '1440px', background: 'var(--color-white)'}}><About/></Section>
      <Section navId='projects' isContent styleAdjust={{background: 'var(--color-white)'}}><Projects/></Section>
      <Section navId='research' isContent styleAdjust={{background: '#568ea3'}}><Research/></Section>
      <Section navId='contact' isContent styleAdjust={{minHeight: '100vh', background: 'var(--color-white)'}}><Contact/></Section>
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