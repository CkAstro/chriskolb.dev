import { useMousePosition } from '../../contexts/mouseposition';
import NucleoDisplay from '../nucleodisplay';
import style from './header.module.css';

const Header = () => {
   const { setMousePosition } = useMousePosition();

   const handleMouseMove = event => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
   }

   return <div onMouseMove={handleMouseMove}>
      <div className={`noselect ${style.headerContainer}`}>
         <h1>Christopher Kolb</h1>
         <h2>Full Stack Development + Computational Astrophysics</h2>
      </div>
      <NucleoDisplay/>
   </div>;
}

export default Header;