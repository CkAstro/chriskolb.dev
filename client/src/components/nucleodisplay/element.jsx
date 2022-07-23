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

const Element = ({ square, squareSize, hasMouseOver }) => {
   if (!square || !squareSize) return;

   const xloc = square.col * squareSize.square;
   const yloc = square.row * squareSize.square + squareSize.square;
   const spacing = squareSize.gap + 2*squareSize.border;

   return (
      <g className={`noselect ${style.nucleo__element}`} transform={`translate(${xloc}, ${yloc}) scale(1, -1)`}>
         <rect 
            className={hasMouseOver ? style.mouseOver : ''} 
            x={`${spacing/2}px`}
            y={`${spacing/2}px`}
            width={`${squareSize.square-spacing}px`}
            height={`${squareSize.square-spacing}px`}
            fill='#2e2e2e'
         />
         <text
            x={`${squareSize.square/2}`}
            y={`${squareSize.square/2+2}`}
            fontSize={squareSize.mainText}
            fontWeight='900'
            textAnchor='middle'
            dominantBaseline='middle'
            fill='#1e1e1e'
         >{square.props.element}</text>
         <text
            className={`${hasMouseOver ? style.mouseOver : ''} ${square.props.stable ? style.stable : ''}`}
            x={`${squareSize.subMargin+6}px`}
            y={`${squareSize.subMargin+6}px`}
            fontSize={squareSize.subText}
            fontWeight='900'
            dominantBaseline='hanging'
            fill='#1e1e1e'
         >{square.props.isotope}</text>
         <text
            x={`${squareSize.subMargin+6}px`}
            y={`${squareSize.square-6-squareSize.subMargin}px`}
            fontSize={squareSize.subText}
            fontWeight='900'
            fill='#1e1e1e'
         >{square.props.proton}</text>
      </g>
   );
}

export default memo(Element);