import { Link } from 'react-scroll';
import style from './header.module.css';

const elements = [
   { name: 'Projects', link: 'projects' },
   { name: 'Research', link: 'research' },
   { name: 'Papers', link: 'papers' },
   { name: 'About', link: 'about' },
];

const Navbar = () => {
   const preventDraggable = event => event.preventDefault();

   const navlinks = () => elements.map(dir => (
      <Link
         key={dir.name}
         onDragStart={preventDraggable}
         className={`noselect ${style.link}`}
      >{dir.name}</Link>
   ));

   return (
      <div className={`${style.navContainer}`}>
         <div className='contentContainer'>
            <div className={style.navbar}>
               {navlinks()}
            </div>
         </div>
      </div>
   );
}

export default Navbar;