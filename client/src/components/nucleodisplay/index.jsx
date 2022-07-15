import { useEffect, useState, useRef } from 'react';
import { useMousePosition } from 'contexts';
import {
   nucleoChart, 
   useSquareSize, 
   buildStableSquares, 
   buildDisplayChart, 
   organizeChart
} from './utils';
import Spotlight from './spotlight';
import style from './nucleodisplay.module.css';

const NucleoDisplay = () => {
   const [ displayChart, setDisplayChart ] = useState(null);
   const [ organizedChart, setOrganizedChart ] = useState(null);
   const [ stableSquares, setStableSquares ] = useState([]);

   const { mousePosition } = useMousePosition();
   const { squareSize } = useSquareSize();

   const divRef = useRef(null);

   // organize data on init
   useEffect(() => {
      const chart = organizeChart(nucleoChart)
      setOrganizedChart(chart);
   }, []);

   // then build display chart
   useEffect(() => {
      const chart = buildDisplayChart(organizedChart, mousePosition, squareSize, divRef);
      setDisplayChart(chart);
   }, [mousePosition, organizedChart, squareSize]);

   // then build background masks for spotlight
   useEffect(() => {
      const squares = buildStableSquares(organizedChart, squareSize, divRef);
      setStableSquares(squares);
   }, [organizedChart, window.innerWidth, window.innerHeight, squareSize]);

   return (
      <div ref={divRef} className={style.nucleodisplayContainer}>
         <div className={style.flexFill}/>
         <Spotlight squares={stableSquares} divRef={divRef}/>
         {displayChart}
      </div>
   );
}

export default NucleoDisplay;