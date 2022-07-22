// this will take raw input 'nucleoChart' from utils.js
// and convert it into a useful layout where elements are aligned 
// by proton count (row, 'yloc') and neutron count (col, 'xloc')

const getSquares = chart => {
   if (!chart) return;

   let squares = [];
   chart.map((row, rowInd) => {
      const shiftedInd = chart.length - rowInd;
      const yloc = shiftedInd - 1;        // proton count
      row.isotopes.map((col, colInd) => {
         const xloc = col-shiftedInd+1;   // neutron count
         if (row.exclude && row.exclude.includes(col)) return;
         squares = squares.concat({
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
   return squares;
}

export default getSquares;