import { memo } from 'react';

// This overlay should only be rendered once. It draws a full black
//    background and then uses a mask to cut out space for each element
//    (leaving the grid boundaries visible) so the spotlight can shine 
//    through from the lower layer

const Overlay = ({ squares, squareSize, rect }) => {
   if (!squares || !squareSize || !rect) return;

   const { height } = rect;
   const spacing = squareSize.gap;

   // mask is rendered below as all white, then each square 
   //    is added to the mask as black to create the cut-out effect
   const squareBorders = squares.map((square, ind) => {
      const xloc = square.col * squareSize.square;
      const yloc = height - (square.row+1)*squareSize.square;
      return (
         <rect key={ind}
            x={`${xloc+spacing/2}px`} 
            y={`${yloc+spacing/2}px`} 
            width={`${squareSize.square-spacing}px`} 
            height={`${squareSize.square-spacing}px`} 
            fill='black'
         />
      );
   });

   return (
      <svg width='100%' height='100%'>
         <defs>
            <mask id='overlayMask'>
               <rect width='100%' height='100%' fill='white'/>
               {squareBorders}
            </mask>
         </defs>
         <rect width='100%' height='100%' fill='#1e1e1e' mask='url(#overlayMask)'/>
      </svg>
   );
}

export default memo(Overlay);