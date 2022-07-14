import NucleoItem, { EmptyItem } from '../nucleoitem';
import NucleoInfo from './nucleoinfo';
import style from './nucleodisplay.module.css';

// inputChart : this should already be structured from 'organizeChart'
//    Each row is built separately in a 'style.nucleodisplayRow' flexbox
//    background is not 'var(--color-black)' so we need to hide it by
//    first filling with empty boxes, then elements, then a single empty
//    box with 'flex: 1' so it will stretch to fill the remaining container
//
// mousePosition : required for hover effect near page title
//
// divRef : so this still functions on scroll
//
// ----- note --------------------------------------------------------
// for the last (bottom) row, we add a 'NucleoInfo' element before the 
// empty flex item, which will link to the wiki page for more info

const buildDisplayChart = (inputChart, mousePosition, squareSize, divRef) => {
   if (!inputChart) return;

   // get dynamic buffer and sizing
   const paddingX = 10;
   const { top, height } = divRef.current.getBoundingClientRect();
   const buffer = top + height;

   // build the chart row by row
   const newChart = inputChart.map((row, rowInd) => {
      if (!row) return;

      // loop through each column
      return <div key={rowInd} className={style.nucleodisplayRow}>
         {row.map((col, colInd) => {
            if (!col) return <EmptyItem key={colInd}/>;     // fill with empty boxes

            // determine which square gets hover effect
            const activeRow = Math.floor((buffer - mousePosition.y) / squareSize) === col.yloc;
            const activeCol = Math.floor((mousePosition.x - paddingX) / squareSize) === col.xloc;

            // return an element item
            return <NucleoItem key={colInd}
               props={col.props}
               isMouseOver={activeRow && activeCol}
            />;
         })}
         {rowInd === inputChart.length-1 && <NucleoInfo setStyle={{width: `${5*squareSize-6}px`}}/>}
         <EmptyItem key='end'/>     {/* add the 'flex: 1' box */}
      </div>
   });
   return newChart;
}

export default buildDisplayChart;