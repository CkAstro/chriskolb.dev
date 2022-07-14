
// this will take raw input 'nucleoChart' from utils.js
// and convert it into a useful layout where they are aligned 
// by proton count (row, 'yloc') and neutron count (col, 'xloc')

const organizeChart = chart => {
   const newChart = chart.map((row, rowInd) => {
      const shiftedInd = chart.length - rowInd;
      const yloc = shiftedInd - 1;
      const preContainer = Array(row.isotopes[0] ? row.isotopes[0]-yloc : 0).fill(null);
      const rowContainer = row.isotopes.map((col, colInd) => {
         const xloc = col ? col-shiftedInd+1 : 1;
         if (row.exclude && row.exclude.includes(col)) return null;
         return {
            xloc,
            yloc,
            props: {
               element: row.element,
               isotope: col || 1,
               proton: col ? shiftedInd-1 : 0,
               stable: row.stable.includes(col),
            },
         }
      });
      return preContainer.concat(rowContainer);
   });
   return newChart;
}

export default organizeChart;