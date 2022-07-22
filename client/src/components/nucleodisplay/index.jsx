import { useEffect, useState, useRef } from 'react';
import { nucleoChart, getSquareSize, getSquares } from './utils';
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
//
// TODO : convert all SVG elements to relative coordinates so viewbox will move
//    the display as the window is resized
//     - resizing window currently doesn't trigger re-render, boxes remane in 
//       same position until mouse movement triggers re-render
//     - forcing re-render on resize causes all boxes to re-render (very laggy) 

const NucleoDisplay = () => {
   const [ squares, setSquares ] = useState(null);
   const [ squareSize, setSquareSize ] = useState(0);
   const divRef = useRef(null);

   // set up element squares on init
   useEffect(() => {
      const newSquares = getSquares(nucleoChart)
      setSquares(newSquares);
   }, []);

   // we'll need main container bounding client to determine where to draw squares and spotlight
   const rect = divRef.current ? divRef.current.getBoundingClientRect() : null;

   // resize squares if window width changes size
   useEffect(() => {
      const newSquareSize = getSquareSize();
      if (!squareSize || newSquareSize.square !== squareSize.square) setSquareSize(newSquareSize);
   }, [window.innerWidth]);

   return (
      <div ref={divRef} className={style.nucleo}>
         <div className={style.nucleo__container}>
            <Spotlight squares={squares} squareSize={squareSize} rect={rect}/>
         </div>
         <div className={style.nucleo__container}>
            <Overlay squares={squares} squareSize={squareSize} rect={rect}/>
         </div>
         <div className={style.nucleo__container}>
            <ElementArray squares={squares} squareSize={squareSize} rect={rect}/>
         </div>
         <NucleoInfo setStyle={{'--squareSize': `${squareSize.square}px`}}/>
      </div>
   );
}

export default NucleoDisplay;