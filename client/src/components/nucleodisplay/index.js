import { useEffect, useState } from 'react';
import NucleoItem from '../nucleoitem';
import style from './nucleodisplay.module.css';

const isStable = 1;
const isBeta = 2;
const isAlpha = 3;
const isEC = 4;
const isP = 5;

const range = (start, end) => {
   let items = [];
   for (let i=start; i<end+1; i++) {
      items = items.concat(i);
   }
   return items;
}

// reference: https://upload.wikimedia.org/wikipedia/commons/b/b5/NuclideMap_stitched.png
const nucleoChart = [
   {element: 'O', isotopes: range(12, 28), decayType: [isP, isEC, isEC, isEC, isStable, isStable, isStable, isBeta, isBeta, isBeta, isBeta, isBeta, isBeta, null, null, null, null]},
   {element: 'N', isotopes: range(10, 25), decayType: [isP, isP, isEC, isEC, isStable, isStable, isBeta, isBeta, isBeta, isBeta, isBeta, isBeta, isBeta, isBeta, null, null]},
   {element: 'C', isotopes: range(8, 22), decayType: [isP, isEC, isEC, isEC, isStable, isStable, isBeta, isBeta, isBeta, isBeta, isBeta, null, isBeta, null, isBeta]},
   {element: 'B', isotopes: range(6, 19), decayType: [isP, isAlpha, isAlpha, isAlpha, isStable, isStable, isBeta, isBeta, isBeta, isBeta, null, isBeta, null, isBeta]},
   {element: 'Be', isotopes: range(5, 16), decayType: [isP, isAlpha, isEC, isAlpha, isStable, isBeta, isBeta, isBeta, null, isBeta, null, null]},
   {element: 'Li', isotopes: range(3, 12), decayType: [isP, isP, isP, isStable, isStable, isAlpha, isBeta, null, isBeta, null]},
   {element: 'He', isotopes: range(3, 10), decayType: [isStable, isStable, null, isBeta, null, isBeta, null, null]},
   {element: 'H', isotopes: range(1, 7), decayType: [isStable, isStable, isBeta, null, null, null, null]},
   {element: 'N', isotopes: [null], decayType: [isBeta]},
];

const NucleoDisplay = () => {
   const [ chart, setChart ] = useState(null);

   useEffect(() => {
      const maxIsotope = 28;
      const bufferSize = 66;
      const newChart = nucleoChart.map((row, rowInd) => {
         const leftBufferCount = row.isotopes[0] ? row.isotopes[0] + rowInd - nucleoChart.length + 1 : 1;
         const rightBufferCount = maxIsotope - row.isotopes.length - leftBufferCount;
         return <div key={rowInd} className={style.nucleodisplayRow} style={{ padding: `0 ${rightBufferCount*bufferSize}px 0 ${leftBufferCount*bufferSize}px`}}>
            {row.isotopes.map((col, colInd) => {
               return <NucleoItem key={colInd} element={row.element} isotope={col} decayType={row.decayType[colInd]}/>;
            })}
         </div>
      });
      setChart(newChart);
   }, []);

   return <div className={style.nucleodisplayContainer}>
      {chart}
   </div>
}

export default NucleoDisplay;