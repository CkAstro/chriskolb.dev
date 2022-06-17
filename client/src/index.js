import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/header/navbar';
import '@fontsource/roboto';
import './index.css';      // global import

const Main = () => {

   return (
      <div className='mainContainer'>
         <Header/>
         <Navbar/>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);