import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/header/navbar';
import '@fontsource/roboto';
import './index.css';      // global import
import ContentPage from './components/contentpage';

const Main = () => {

   return (
      <div className='mainContainer snap'>
         <Header/>
         <Navbar/>
         <ContentPage title='Projects'>This is Projects content</ContentPage>
         <ContentPage title='Research'>This is Research content</ContentPage>
         <ContentPage title='Papers'>This is Papers content</ContentPage>
         <ContentPage title='About'>This is About content</ContentPage>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);