import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/header/navbar';
import ContentPage from './components/contentpage';
import '@fontsource/roboto';
import './index.css';      // global import

const Main = () => {
   const [ scrollValue, setScrollValue ] = useState(0);

   const handleScroll = event => setScrollValue(event.target.scrollTop);

   return (
      <div id='mainContainer' className='mainContainer snap' onScroll={handleScroll}>
         <Header/>
         <Navbar scrollValue={scrollValue}/>
         <ContentPage title='Projects'>This is 'Projects' content</ContentPage>
         <ContentPage title='Research'>This is 'Research' content</ContentPage>
         <ContentPage title='Papers'>This is 'Papers' content</ContentPage>
         <ContentPage title='About'>This is 'About' content</ContentPage>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);