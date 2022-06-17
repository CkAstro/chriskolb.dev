import { Element } from 'react-scroll';
import style from './header.module.css';

const Header = () => {
   return (
      <Element id='home' className={style.header}>
         <div className='contentContainer'>
            <h1>Christopher Kolb</h1>
            <h2>Computational Astrophysics + Full Stack Development</h2>
         </div>
      </Element>
   );
}

export default Header;