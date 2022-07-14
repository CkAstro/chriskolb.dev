
// stable elements will have a red border glow rather than a white
//    to do this, we simply add a red background behind it (using the spotlight)
// 
// this function will build an array with the location of those backgrounds
//    for use in 'Masks' component in spotlight.js

const buildStableSquares = (inputChart, squareSize, divRef) => {
   if (!inputChart) return;

   // find dynamic square sizing
   const { height } = divRef.current.getBoundingClientRect();

   // loop through all rows and cols of input chart, add location of stable items
   let stableSquares = [];
   inputChart.map(row => {
      if (!row) return;
      row.map(col => {
         if (!col) return;
         if (col.props.stable) stableSquares = stableSquares.concat({x: col.xloc*squareSize, y: height-(col.yloc+1)*squareSize})
      });
   });

   return stableSquares;
}

export default buildStableSquares;