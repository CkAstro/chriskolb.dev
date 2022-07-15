import { memo } from 'react';
import { useMousePosition } from 'contexts';
import { useSquareSize } from './utils';
import style from './nucleodisplay.module.css';

// squares : location of red backgrounds to place behind stable elements
// divRef : so this still functions on scroll
//
// We illuminate the isotope borders by having transparent borders which
//    reveal this Spotlight component. Spotlight follows the mouse, and 
//    will turn red behind stable elements. 
//
// To change spotlight color, we simply use two spotlights (one white one red)
//    and create a square mask for each stable isotope. '#redMask' will block
//    all spotlight effect NOT in these squares, and '#whiteMask' is an inverted
//    version, so the white spotlight is blocked within.

const Spotlight = ({ squares, divRef }) => {
   const { mousePosition } = useMousePosition();
   const { squareSize } = useSquareSize();

   if (!divRef.current) return;
   const { top } = divRef.current.getBoundingClientRect();

   return (
      <div className={style.spotlightContainer}>
         <svg width='100%' height='100%'>
            <defs>
               <radialGradient id='redSpotlight'>
                  <stop offset='10%' stopColor='rgba(150, 0, 0, 0.5)'/>
                  <stop offset='70%' stopColor='rgba(100, 0, 0, 0.1)'/>
                  <stop offset='100%' stopColor='rgba(100, 0, 0, 0.0)'/>
               </radialGradient>
               <radialGradient id='whiteSpotlight'>
                  <stop offset='10%' stopColor='rgba(100, 100, 100, 0.5)'/>
                  <stop offset='70%' stopColor='rgba(100, 100, 100, 0.1)'/>
                  <stop offset='100%' stopColor='rgba(100, 100, 100, 0.0)'/>
               </radialGradient>

               <mask id='redMask'>
                  <Masks squares={squares} squareSize={squareSize}/>
               </mask>
               <mask id='whiteMask'>
                  {/* inverted mask: create a white area, then overlay a masked black area */}
                  <rect x='0' y='0' width='100%' height='100%' fill='white'/>
                  <rect x='0' y='0' width='100%' height='100%' fill='black' mask='url(#redMask)'/>
               </mask>
            </defs>

            <circle cx={`${mousePosition.x}px`} cy={`${mousePosition.y-top}px`} r='300' fill='url(#whiteSpotlight)' mask='url(#whiteMask)'/>
            <circle cx={`${mousePosition.x}px`} cy={`${mousePosition.y-top}px`} r='300' fill='url(#redSpotlight)' mask='url(#redMask)'/>
         </svg>
      </div>
   );
}

// the spotlight mask the stable elements
const Masks = memo(({ squares, squareSize }) => {
   if (!squares) return;
   return squares.map((pos, ind) => <rect key={ind} x={pos.x} y={pos.y} width={squareSize} height={squareSize} fill='white'/>);
});

export default Spotlight;