import { useEffect, useState } from 'react';
import NucleoItem, { EmptyItem } from '../nucleoitem';
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
   // {element: 'Si', isotopes: range(22, 44), decayType: range(22, 44)},
   {element: 'Al', isotopes: range(21, 42), decayType: range(21, 42)},
   {element: 'Mg', isotopes: range(19, 40), decayType: range(19, 40)},
   {element: 'Na', isotopes: range(18, 37), decayType: range(18, 37), exclude: [36]},
   {element: 'Ne', isotopes: range(16, 34), decayType: range(16, 34), exclude: [33]},
   {element: 'F', isotopes: range(14, 31), decayType: [isP, isP, isP, isEC, isEC, isStable, isBeta, isBeta, isBeta, isBeta, isBeta, isBeta, isBeta, isBeta, null, isBeta, null, isBeta]},
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

   const buildChart = () => {
      const squareSize = window.innerWidth < 461 ? 54 : 66;
      const maxRows = Math.floor(window.innerHeight / squareSize);
      const maxCols = Math.floor(window.innerWidth / squareSize);
      const newChart = nucleoChart.map((row, rowInd) => {
         const shiftedInd = nucleoChart.length - rowInd;
         if (shiftedInd > maxRows) return;
         return <div key={rowInd} className={style.nucleodisplayRow}>
            {row.isotopes[0] ? range(1, row.isotopes[0]+1-shiftedInd).map(ind => <EmptyItem key={ind}/>) : <EmptyItem key={0}/>}
            {row.isotopes.map((col, colInd) => {
               if (col-shiftedInd+1 > maxCols) return;
               if (row.exclude && row.exclude.includes(col)) return <EmptyItem key={colInd}/>;
               return <NucleoItem key={colInd} element={row.element} isotope={col} proton={col ? shiftedInd : null} decayType={row.decayType[colInd]}/>;
            })}
         </div>;
      });
      setChart(newChart);
   }

   useEffect(() => {
      buildChart();
   }, [window.innerWidth, window.innerHeight]);

   return <div className={style.nucleodisplayContainer}>
      {chart}
   </div>
}

export default NucleoDisplay;