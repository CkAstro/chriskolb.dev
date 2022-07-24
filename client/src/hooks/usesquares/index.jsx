import { useState, useEffect } from 'react';
import nucleoChart from './nucleochart';

const useSquares = () => {
   const [ squares, setSquares ] = useState(null);
   const [ squareSize, setSquareSize ] = useState(null);

   // convert the display chart to a 1D array of objects
   //    containing location and isotope info
   // chart will only include on-screen elements to save
   //    render time
   useEffect(() => {
      if (!squareSize) return;
      const maxRow = window.innerHeight / squareSize.square + 1;
      const maxCol = window.innerWidth / squareSize.square;

      let newSquares = [];
      nucleoChart.map((row, rowInd) => {
         if (nucleoChart.length - rowInd > maxRow) return;
         const shiftedInd = nucleoChart.length - rowInd;
         const yloc = shiftedInd - 1;        // proton count
         row.isotopes.map((col, colInd) => {
            if (colInd > maxCol) return;
            const xloc = col-shiftedInd+1;   // neutron count
            if (row.exclude && row.exclude.includes(col)) return;
            newSquares = newSquares.concat({
               row: yloc,
               col: xloc,
               props: {
                  element: row.element,
                  isotope: col,
                  proton: yloc,
                  stable: row.stable && row.stable.includes(col),
               }
            });
         });
      });
      setSquares(newSquares);
   }, [squareSize, window.innerWidth, window.innerHeight]);

   // configure element square sizing based on window width
   useEffect(() => {
      let newSquareSize;
      if (window.innerWidth < 461) {
         newSquareSize = {
            square: 54,
            gap: 4,
            border: 2,
            mainText: '18px',
            subText: '10px',
            subMargin: 1,
         }
      } else if (window.innerWidth < 1921) {
         newSquareSize = {
            square: 66,
            gap: 6,
            border: 2,
            mainText: '24px',
            subText: '12px',
            subMargin: 2,
         }
      } else {
         newSquareSize = {
            square: 85,
            gap: 6,
            border: 3,
            mainText: '32px',
            subText: '16px',
            subMargin: 4,
         }
      }
      if (!squareSize || squareSize.square !== newSquareSize.square) setSquareSize(newSquareSize);
   }, [window.innerWidth, window.innerHeight]);

   return { squares, squareSize };
}

export default useSquares;