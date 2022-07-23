import { useRef } from 'react';
import { useSquares } from 'hooks';
import ElementArray from './elementarray';
import NucleoInfo from './nucleoinfo';
import Spotlight from './spotlight';
import Overlay from './overlay';
import style from './nucleodisplay.module.css';

// The glowing border effect on this display is done by placing a 'spotlight'
//    on the lowest layer; a circular glow effect which follows the mouse
//    The 'grid' and elements are then drawn on top of the spotlight with a 2px
//    gap in between. This gap allows the spotlight to come through and acts as
//    the interactive border
//
// The effect relies heavily on useMousePosition context even though it is not used 
//    in the main component - this allows us to easily use the spotlight along with 
//    the hover effect and also makes implementing a planned idle effect much easier
//
// NOTE : The element blocks are drawn as SVGs to fix a zoom issue in Firefox
//    it also seems to be a slight performance boost
//
// NOTE : for now we prop drill squareSize/rect rather than use a context
//    so we can save on rerenders

const NucleoDisplay = () => {
   const { squares, squareSize } = useSquares();
   const divRef = useRef(null);

   return (
      <div ref={divRef} className={style.nucleo}>
         <div className={style.nucleo__container}>
            <Spotlight squares={squares} squareSize={squareSize} divRef={divRef}/>
         </div>
         <div className={style.nucleo__container}>
            <Overlay squares={squares} squareSize={squareSize}/>
         </div>
         <div className={style.nucleo__container}>
            <ElementArray squares={squares} squareSize={squareSize} divRef={divRef}/>
         </div>
         <NucleoInfo/>
      </div>
   );
}

export default NucleoDisplay;