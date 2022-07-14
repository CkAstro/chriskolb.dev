import { useEffect, useState, useRef } from 'react';
import { useMousePosition } from '../../contexts/mouseposition';
import { nucleoChart, useSquareSize } from './utils';
import buildDisplayChart from './builddisplaychart';
import organizeChart from './organizechart';
import Spotlight from './spotlight';
import buildStableSquares from './buildstablesquares';
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