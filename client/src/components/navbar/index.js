import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import style from './navbar.module.css';

const elements = [
   { name: 'Home', link: 'home' },
   { name: 'About', link: 'about' },
   { name: 'Portfolio', link: 'projects' },
   { name: 'Research', link: 'research' },
   { name: 'Contact', link: 'contact' },
];

const Navbar = ({ scrollValue }) => {
   const [ isStatic, setIsStatic ] = useState(false);

   useEffect(() => {
      if (scrollValue > window.innerHeight - 1) return setIsStatic(true);
      if (scrollValue < window.innerHeight - 40) return setIsStatic(false);
   }, [scrollValue]);

   const preventDraggable = event => event.preventDefault();

   const buildNavLinks = () => elements.map(dir => (
      <Link key={dir.name}
         activeClass={style.active}
         smooth spy to={dir.link}
         containerId='mainContainer'
         onDragStart={preventDraggable}
         className={`noselect ${style.link}`}
      >{dir.name}</Link>
   ));

   return <div className={`${style.navContainer} ${isStatic ? style.static : null}`}>
      <div className='contentContainer'>
         <div className={style.navbar}>
            {buildNavLinks()}
            <div className={`noselect ${style.brand}`}>CHRISTOPHER KOLB</div>
         </div>
      </div>
   </div>;
}

export default Navbar;