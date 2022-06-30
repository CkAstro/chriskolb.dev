// import { Element } from 'react-scroll';
import NucleoDisplay from '../nucleodisplay';
import style from './header.module.css';

const Header = () => {
   return <>
      <NucleoDisplay/>
      <div className={style.headerContainer}>
         <h2 style={{zIndex: '10', color: '#999'}}>Full Stack Development + Computational Astrophysics</h2>
         <h1 style={{zIndex: '10', color: '#999'}}>Gene Richardson</h1>
      </div>
   </>;
}

export default Header;