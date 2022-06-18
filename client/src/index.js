import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/header/navbar';
import ContentPage from './components/contentpage';
import '@fontsource/roboto';
import './index.css';      // global import

const myContent = [
   { image: require('./content/reversi.png')},
   { image: require('./content/neuralnet.png')},
   { image: require('./content/datavis.png')},
   { image: require('./content/emission.png')},
   { image: require('./content/csm.png')},
   { image: require('./content/instability.png')},
];

const Main = () => {
   const [ scrollValue, setScrollValue ] = useState(0);

   const handleScroll = event => setScrollValue(event.target.scrollTop);

   return (
      <div id='mainContainer' className='mainContainer snap' onScroll={handleScroll}>
         <Header/>
         <Navbar scrollValue={scrollValue}/>
         <ContentPage scrollValue={scrollValue} styleAdjust={{background: '#4f6272'}} title='Projects' content={myContent}/>
         <ContentPage styleAdjust={{background: '#7eb09b'}} title='Research'  content={myContent}/>
         <ContentPage styleAdjust={{background: '#f7f0f5'}} title='Papers'  content={myContent}/>
         <ContentPage styleAdjust={{background: '#404e5c'}} title='About'  content={myContent}/>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);