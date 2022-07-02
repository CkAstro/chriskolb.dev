import { useEffect, useState, useRef } from 'react';
import { useMousePosition } from '../../contexts/mouseposition';
import NucleoItem, { EmptyItem } from '../nucleoitem';
import style from './nucleodisplay.module.css';

const range = (start, end) => {
   let items = [];
   for (let i=start; i<end+1; i++) {
      items = items.concat(i);
   }
   return items;
}

const NucleoInfoContainer = ({ setStyle }) => {
   return <div style={setStyle} className={style.learnMore}>
      <p>nuclear isotopes</p>
      <p>learn more</p>
   </div>;
}

// reference: https://upload.wikimedia.org/wikipedia/commons/b/b5/NuclideMap_stitched.png
const nucleoChart = [
   {element: 'Si', isotopes: range(22, 44), stable: [28, 29, 30]},
   {element: 'Al', isotopes: range(21, 42), stable: [27]},
   {element: 'Mg', isotopes: range(19, 40), stable: [24, 25, 26]},
   {element: 'Na', isotopes: range(18, 37), stable: [23], exclude: [36]},
   {element: 'Ne', isotopes: range(16, 34), stable: [20, 21, 22], exclude: [33]},
   {element: 'F', isotopes: range(14, 31), stable: [19]},
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
   const [ chart, setChart ] = useState(null);
   const [ organizedChart, setOrganizedChart ] = useState(null);
   const { mousePosition } = useMousePosition();

   const divRef = useRef(null);

   const buildChart = () => {
      if (!organizedChart) return;
      const paddingX = 10;
      const paddingY = 50;
      const { top, height } = divRef.current.getBoundingClientRect();
      const buffer = top + height;
      const squareSize = window.innerWidth < 461 ? 54 : window.innerWidth ? 66 : 90;
      const newChart = organizedChart.map((row, rowInd) => {
         if (!row) return;
         return <div key={rowInd} className={style.nucleodisplayRow}>
            {row.map((col, colInd) => {
               if (!col) return <EmptyItem key={colInd}/>;
               const activeRow = Math.floor((buffer - mousePosition.y - paddingY) / squareSize) === col.yloc;
               const activeCol = Math.floor((mousePosition.x - paddingX) / squareSize) === col.xloc;
               const ypos = (col.yloc+1)*squareSize - (buffer - mousePosition.y - paddingY);
               const xpos = mousePosition.x - paddingX - col.xloc*squareSize;
               const isDisabled = xpos*xpos+ypos*ypos > 264*264;
               return <NucleoItem key={colInd}
                  element={nucleoChart[rowInd].element}
                  props={col.props}
                  isMouseOver={activeRow && activeCol}
                  isDisabled={isDisabled}
                  setStyle={isDisabled ? null : { '--x': `${xpos}px`, '--y': `${ypos}px`}}
               />;
            })}
            {rowInd === organizedChart.length-1 && <NucleoInfoContainer setStyle={{width: `${5*squareSize-6}px`}}/>}
         </div>
      });
      setChart(newChart);
   }

   useEffect(() => {
      const squareSize = window.innerWidth < 461 ? 54 : window.innerWidth ? 66 : 90;
      const maxRows = Math.floor(window.innerHeight / squareSize);
      const maxCols = Math.floor(window.innerWidth / squareSize);
      const newChart = nucleoChart.map((row, rowInd) => {
         const shiftedInd = nucleoChart.length - rowInd;
         const yloc = shiftedInd - 1;
         const preContainer = Array(row.isotopes[0] ? row.isotopes[0]-yloc : 1).fill(null);
         const rowContainer = row.isotopes.map((col, colInd) => {
            const xloc = col-shiftedInd+1;
            if (row.exclude && row.exclude.includes(col)) return null;
            return {
               xloc,
               yloc,
               props: {
                  element: row.element,
                  isotope: col,
                  proton: col ? shiftedInd : null,
                  stable: row.stable.includes(col),
               },
            }
         });
         return preContainer.concat(rowContainer);
      });
      setOrganizedChart(newChart);
      buildChart();
   }, [window.innerWidth, window.innerHeight]);

   useEffect(() => {
      buildChart();
   }, [mousePosition, organizedChart]);

   return <div ref={divRef} className={style.nucleodisplayContainer}>
      {chart}
   </div>;
}

export default NucleoDisplay;