import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import style from './header.module.css';

const elements = [
   { name: 'Home', link: 'home' },
   { name: 'Projects', link: 'projects' },
   { name: 'Research', link: 'research' },
   { name: 'Papers', link: 'papers' },
   { name: 'About', link: 'about' },
];

const Navbar = ({ scrollValue }) => {
   const [ isStatic, setIsStatic ] = useState(false);

   useEffect(() => {
      scrollValue > 90
         ? setIsStatic(true)
         : setIsStatic(false)
      ;
   }, [scrollValue]);

   const preventDraggable = event => event.preventDefault();

   const navlinks = () => elements.map(dir => (
      <Link key={dir.name}
         activeClass={style.active}
         smooth spy to={dir.link}
         containerId='mainContainer'
         onDragStart={preventDraggable}
         className={`noselect ${style.link}`}
      >{dir.name}</Link>
   ));

   return (
      <div className={style.navSpacer}>
         <div className={`${style.navContainer} ${isStatic ? style.static : ''}`}>
            <div className='contentContainer'>
               <div className={style.navbar}>
                  {navlinks()}
                  <div className={`noselect ${style.brand}`}>CHRISTOPHER KOLB</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;