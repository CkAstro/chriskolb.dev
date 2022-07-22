import { memo } from 'react';
import style from './nucleodisplay.module.css';

// This builds the element container inside the space cut out in the 'Overlay' component
//           ___________
//          | a         |        a : isotope (technically total mass) - glows on mouseover
//          |           |
//          |     b     |        b : element symbol
//          |           |
//          |_c_________|        c : proton count - should not glow on mouseover
//
//                                 : box background should also glow on mouseover

const Element = ({ square, squareSize, buffer, hasMouseOver }) => {
   if (!square || !squareSize) return;

   const xloc = square.col * squareSize.square;
   const yloc = buffer - (square.row+1)*squareSize.square;
   const spacing = squareSize.gap + 2*squareSize.border;

   return (
      <g className={`noselect ${style.nucleo__element}`}>
         <rect 
            className={hasMouseOver ? style.mouseOver : ''} 
            x={`${xloc+spacing/2}px`} 
            y={`${yloc+spacing/2}px`} 
            width={`${squareSize.square-spacing}px`} 
            height={`${squareSize.square-spacing}px`} 
            fill='#2e2e2e'
         />
         <text
            x={`${xloc+squareSize.square/2}px`} 
            y={`${yloc+squareSize.square/2+2}px`}
            fontSize={squareSize.mainText}
            fontWeight='900'
            textAnchor='middle'
            dominantBaseline='middle'
            fill='#1e1e1e'
         >{square.props.element}</text>
         <text
            className={`${hasMouseOver ? style.mouseOver : ''} ${square.props.stable ? style.stable : ''}`}
            x={`${xloc+6+squareSize.subMargin}px`} 
            y={`${yloc+8+squareSize.subMargin}px`}
            fontSize={squareSize.subText}
            fontWeight='900'
            dominantBaseline='hanging'
            fill='#1e1e1e'
         >{square.props.isotope}</text>
         <text
            x={`${xloc+6+squareSize.subMargin}px`} 
            y={`${yloc+squareSize.square-8-squareSize.subMargin}px`}
            fontSize={squareSize.subText}
            fontWeight='900'
            fill='#1e1e1e'
         >{square.props.proton}</text>
      </g>
   );
}

export default memo(Element);