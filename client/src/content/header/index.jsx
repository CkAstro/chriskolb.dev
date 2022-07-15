import { useMousePosition } from 'contexts';
import NucleoDisplay from 'components/nucleodisplay';
import style from './header.module.css';

const Header = () => {
   const { setMousePosition } = useMousePosition();

   // capture mouse movement for spotlight and hover effects in NucleoDisplay
   const handleMouseMove = event => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
   }

   return (
      <div onMouseMove={handleMouseMove}>
         <div className={`noselect ${style.headerContainer}`}>
            <h1>Christopher Kolb</h1>
            <h2>Full Stack Development <span style={{fontWeight: '400'}}>+</span> Computational Astrophysics</h2>
         </div>
         <NucleoDisplay/>
      </div>
   );
}

export default Header;