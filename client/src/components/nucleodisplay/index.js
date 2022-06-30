import { useState } from 'react';
import NucleoItem from '../nucleoitem';
import style from './nucleodisplay.module.css';

const range = (start, end) => {
   let items = [];
   for (let i=start; i<end+1; i++) {
      items = items.concat(i);
   }
   return items;
}

// reference: https://upload.wikimedia.org/wikipedia/commons/b/b5/NuclideMap_stitched.png
const nucleoChart = [
   {element: 'O', isotopes: range(12, 28), stable: [16, 17, 18]},
   {element: 'N', isotopes: range(10, 25), stable: [14, 15]},
   {element: 'C', isotopes: range(8, 22), stable: [12, 13]},
   {element: 'B', isotopes: range(6, 19), stable: [10, 11]},
   {element: 'Be', isotopes: range(5, 16), stable: [9]},
   {element: 'Li', isotopes: range(3, 12), stable: [6, 7]},
   {element: 'He', isotopes: range(3, 10), stable: [3, 4]},
   {element: 'H', isotopes: range(1, 7), stable: [1, 2]},
   {element: 'N', isotopes: [null], stable: []},
];

const NucleoDisplay = () => {
   const [ mousePos, setMousePos ] = useState(null);

   const handleMouseMove = event => {
      const { clientX, clientY } = event;
      setMousePos({ x: clientX-30, y: clientY-30 });
   }

   const buildChart = () => {
      const maxIsotope = 28;
      const bufferSize = 66;
      return nucleoChart.map((row, rowInd) => {
         const leftBufferCount = row.isotopes[0] ? row.isotopes[0] + rowInd - nucleoChart.length + 1 : 1;
         const rightBufferCount = maxIsotope - row.isotopes.length - leftBufferCount;
         return <div key={rowInd} className={style.nucleodisplayRow} style={{ padding: `0 ${rightBufferCount*bufferSize}px 0 ${leftBufferCount*bufferSize}px`}}>
            {row.isotopes.map((col, colInd) => {
               return <NucleoItem key={colInd} mousePos={mousePos} element={row.element} isotope={col} stable={row.stable.includes(col)}/>;
            })}
         </div>
      });
   }

   return <div className={style.nucleodisplayContainer}
      onMouseMove={handleMouseMove}>
      {buildChart()}
   </div>
}

export default NucleoDisplay;