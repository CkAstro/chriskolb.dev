import { useMousePosition } from 'contexts';
import SpotlightDefs from './spotlightmask';
import style from './nucleodisplay.module.css';

// We illuminate the isotope borders by having transparent borders which
//    reveal this Spotlight component. Spotlight follows the mouse, and 
//    will turn red behind stable elements. 
//
// To change spotlight color, we simply use two spotlights (one white one red)
//    and create a square mask for each stable isotope. '#redMask' will block
//    all spotlight effect NOT in these squares, and '#whiteMask' is an inverted
//    version, so the white spotlight is blocked within.
//
// NOTE : '#redMask' and '#whiteMask' masks as well as '#redSpotlight' 
//    and '#whiteSpotlight' radial gradients used here are defined in 
//    the 'SpotlightDefs' component

const Spotlight = ({ squares, squareSize, rect }) => {
   const { mousePosition } = useMousePosition();

   if (!squares || !squareSize || !rect) return;
   const { top } = rect;

   // 'nucleo__spotlight' container is necessary so the un-highlighted background 
   //    matches the element containers
   //    - without it, the border will 'appear' rather than 'glow'
   return (
      <div className={style.nucleo__spotlight}>
         <svg width='100%' height='100%'>
            <SpotlightDefs squares={squares} squareSize={squareSize} rect={rect}/>

            <circle cx={`${mousePosition.x}px`} cy={`${mousePosition.y-top}px`} r='300' fill='url(#whiteSpotlight)' mask='url(#whiteMask)'/>
            <circle cx={`${mousePosition.x}px`} cy={`${mousePosition.y-top}px`} r='300' fill='url(#redSpotlight)' mask='url(#redMask)'/>
         </svg>
      </div>
   );
}

export default Spotlight;