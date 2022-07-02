import { useEffect, useState, useRef } from 'react';
import { useMousePosition } from '../../contexts/mouseposition';
import { nucleoChart } from './utils';
import buildChart from './buildchart';
import organizeChart from './organizechart';
import style from './nucleodisplay.module.css';

const NucleoDisplay = () => {
   const [ chart, setChart ] = useState(null);
   const [ organizedChart, setOrganizedChart ] = useState(null);
   const { mousePosition } = useMousePosition();

   const divRef = useRef(null);

   useEffect(() => {
      organizeChart(nucleoChart, setOrganizedChart);
   }, [window.innerWidth, window.innerHeight]);

   useEffect(() => {
      buildChart(organizedChart, mousePosition, divRef, setChart);
   }, [mousePosition, organizedChart]);

   return <div ref={divRef} className={style.nucleodisplayContainer}>
      {chart}
   </div>;
}

export default NucleoDisplay;