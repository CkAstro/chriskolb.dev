import { useState, useEffect } from 'react';
import ButtonGroup from '../../../components/buttongroup';
import API from '../../../api';
import PolarPlot from './polarplot';
import RadialPlot from './radialplot';
import AngularPlot from './angularplot';
import style from './csm.module.css';

const CSMApp = () => {
   const [ mrto, setMrto ] = useState('10');
   const [ vwind, setVwind ] = useState('15');
   const [ vrto, setVrto ] = useState('10');
   const [ CSMData, setCSMData ] = useState(null);
   const [ dataPoint, setDataPoint ] = useState({x: 115, y: 35});

   const polarData = CSMData ? {
      imageData: CSMData.imageData,
      imax: CSMData.imax,
      jmax: CSMData.jmax,
      zxc: CSMData.zxc,
      zyc: CSMData.zyc,
      dataPoint: dataPoint,
      origin: {x: 10, y: CSMData.imax+10},
   } : null;

   const angularData = CSMData ? {
      imax: CSMData.imax,
      jmax: CSMData.jmax,
      zyc: CSMData.zyc,
      dataPoint: dataPoint,
      data: CSMData.data,
      scale: {x: 0.85, y: 0.7},
   } : null;

   const radialData = CSMData ? {
      imax: CSMData.imax,
      jmax: CSMData.jmax,
      zxc: CSMData.zxc,
      dataPoint: dataPoint,
      data: CSMData.data,
      scale: {x: 0.85, y: 0.7},
   } : null;

   useEffect(() => {
      API.getCSMData(mrto, vwind, vrto)
         .then(response => setCSMData(response));
   }, [mrto, vwind, vrto]);

   return <>
      <div className={style.buttonContainer}>
         <ButtonGroup setter={setMrto} header={'Mass Ratio'}>{[
            {text: '1.0', value: '10'},
            {text: '1.5', value: '15'},
            {text: '2.0', value: '20'},
            {text: '2.5', value: '25'},
         ]}</ButtonGroup>
         <ButtonGroup setter={setVwind} header={'Wind Speed'}>{[
            {text: '15', value: '15'},
            {text: '20', value: '20'},
            {text: '25', value: '25'},
         ]}</ButtonGroup>
         <ButtonGroup setter={setVrto} header={'Speed Ratio'}>{[
            {text: '1.0', value: '10'},
            {text: '1.5', value: '15'},
            {text: '2.0', value: '20'},
         ]}</ButtonGroup>
      </div>

      <div className={style.canvasGrid}>
         <div className={style.rightGrid}>
            <PolarPlot data={polarData} setDataPoint={setDataPoint}/>
         </div>
         <div className={style.leftGrid}>
            <AngularPlot data={angularData} setDataPoint={setDataPoint}/>
         </div>
         <div className={style.leftGrid}>
            <RadialPlot data={radialData} setDataPoint={setDataPoint}/>
         </div>
      </div>
   </>;
}

export default CSMApp;