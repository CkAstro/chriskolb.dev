
const organizeChart = (chart, setOrganizedChart) => {
   const newChart = chart.map((row, rowInd) => {
      const shiftedInd = chart.length - rowInd;
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
}

export default organizeChart;