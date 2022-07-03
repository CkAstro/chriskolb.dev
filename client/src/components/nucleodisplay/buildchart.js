import NucleoItem, { EmptyItem } from '../nucleoitem';
import NucleoInfo from './nucleoinfo';
import style from './nucleodisplay.module.css';

const buildChart = (inputChart, mousePosition, divRef, setChart) => {
   if (!inputChart) return;
   const paddingX = 10;
   const paddingY = 50;
   const { top, height } = divRef.current.getBoundingClientRect();
   const buffer = top + height;
   const squareSize = window.innerWidth < 461 ? 54 
      : (window.innerWidth < 1921 ? 66 : 90);
   const newChart = inputChart.map((row, rowInd) => {
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
               props={col.props}
               isMouseOver={activeRow && activeCol}
               isDisabled={isDisabled}
               setStyle={isDisabled ? null : { '--x': `${xpos}px`, '--y': `${ypos}px`}}
            />;
         })}
         {rowInd === inputChart.length-1 && <NucleoInfo setStyle={{width: `${5*squareSize-6}px`}}/>}
      </div>
   });
   setChart(newChart);
}

export default buildChart;