import { useState, useEffect } from 'react';
import ButtonGroup from '../../../components/buttongroup';
import { InteractiveCanvas } from '../../../components/canvas';
import API from '../../../api';
import style from './csm.module.css';

const drawPolarPlot = (ctx, data) => {
   if (!data) return;
   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   const origin = data.origin;
   const pi = Math.PI;
   
   // load and display image data
   const xSize = data.imax;
   const ySize = data.imax*2;
   const polarImage = ctx.createImageData(xSize, ySize);
   for (let i=0; i<xSize; i++) {
      for (let j=0; j<ySize; j++) {
         const dataPos = i*ySize+j;
         for (let k=0; k<4; k++) {
            const imgPos = 4*dataPos+k;
            polarImage.data[imgPos] = data.imageData[dataPos][k];
         }
      }
   }
   ctx.putImageData(polarImage, origin.x, origin.y-data.imax);

   // draw grid overlay
   const ir = data.zxc.vals[0] / data.zxc.vals[data.imax-1] * xSize;
   const or = xSize;

   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(origin.x, origin.y, or, -pi/2.0, pi/2.0, false);   // outer arc
   ctx.lineTo(origin.x, origin.y+ir);
   ctx.arc(origin.x, origin.y, ir, pi/2.0, -pi/2.0, true);
   ctx.lineTo(origin.x, origin.y-or);
   ctx.stroke();
   // ctx.lineWidth = 1;

   // draw crosshair
   const boxSize = 4;
   const zxcScaled = data.zxc.vals.map(val => data.imax*val/data.zxc.vals[data.imax-1]);

   const rad0 = zxcScaled[data.dataPoint.x];
   const the0 = data.zyc.vals[data.dataPoint.y];
   const xloc = rad0*Math.sin(the0)+origin.x;
   const yloc = origin.y-rad0*Math.cos(the0);

   const xtmp = rad0*Math.sin(the0);
   const ytmp = rad0*Math.cos(the0);

   let rad1, rad2, the1, the2;
   if (the0 < pi/4.0) {
      rad1 = (ytmp-boxSize)/Math.cos(the0);
      rad2 = (ytmp+boxSize)/Math.cos(the0);
      the1 = Math.asin((xtmp-boxSize)/rad0)-pi/2.0;
      the2 = Math.asin((xtmp+boxSize)/rad0)-pi/2.0;
   } else if (the0 < pi/2.0) {
      rad1 = (xtmp-boxSize)/Math.sin(the0);
      rad2 = (xtmp+boxSize)/Math.sin(the0);
      the1 = Math.acos((ytmp+boxSize)/rad0)-pi/2.0;
      the2 = Math.acos((ytmp-boxSize)/rad0)-pi/2.0;
   } else if (the0 < 3*pi/4.0) {
      rad1 = (xtmp-boxSize)/Math.sin(the0);
      rad2 = (xtmp+boxSize)/Math.sin(the0);
      the1 = Math.acos((ytmp+boxSize)/rad0)-pi/2.0;
      the2 = Math.acos((ytmp-boxSize)/rad0)-pi/2.0;
   } else {
      rad1 = (ytmp+boxSize)/Math.cos(the0);
      rad2 = (ytmp-boxSize)/Math.cos(the0);
      the1 =-Math.asin((xtmp+boxSize)/rad0)+pi/2.0;
      the2 =-Math.asin((xtmp-boxSize)/rad0)+pi/2.0;
   }

   // radial axis
   ctx.strokeStyle = 'red';
   ctx.setLineDash([5,5]);
   ctx.beginPath();
   ctx.moveTo(origin.x+ir*Math.sin(the0), origin.y-ir*Math.cos(the0));
   if (rad1 > ir)ctx.lineTo(origin.x+rad1*Math.sin(the0), origin.y-rad1*Math.cos(the0));
   ctx.moveTo(origin.x+or*Math.sin(the0), origin.y-or*Math.cos(the0));
   if (rad2 < or) ctx.lineTo(origin.x+rad2*Math.sin(the0), origin.y-rad2*Math.cos(the0));
   ctx.stroke();

   // polar axis 
   //    - we draw arcs as we do so the dashes remain consistent
   //    - they will always start at start of arc, so starting 
   //      arc at the box looks ugly
   const dashScale = rad0 / or;
   ctx.setLineDash([8*dashScale, 8*dashScale]);    // scale dashing
   ctx.beginPath();
   if (the1 > -pi/2.0) ctx.arc(origin.x, origin.y, rad0, -pi/2.0, the1, false);
   ctx.moveTo(origin.x, origin.y+rad0);
   if (the2 < pi/2) ctx.arc(origin.x, origin.y, rad0, pi/2, the2, true);
   ctx.stroke();
   ctx.setLineDash([]);
   
   // location box
   ctx.strokeStyle = 'white';
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.rect(xloc-boxSize, yloc-boxSize, 2*boxSize+1, 2*boxSize+1);
   ctx.stroke();
   ctx.strokeStyle = 'black';
   ctx.lineWidth = 1;
}

const CSMApp = () => {
   const [ mrto, setMrto ] = useState('10');
   const [ vwind, setVwind ] = useState('15');
   const [ vrto, setVrto ] = useState('10');
   const [ CSMData, setCSMData ] = useState(null);
   const [ dataPoint, setDataPoint ] = useState({x: 115, y: 35});

   const updateDataPoint = (clickLocation, data) => {
      if (!data) return;
      const {origin, imax, jmax, zxc, zyc } = data;
      if (clickLocation.x < origin.x || clickLocation.x > origin.x+imax) return;
      if (clickLocation.y < origin.y-imax || clickLocation.y > origin.y+imax) return;

      // get radial location
      const rad2 = (clickLocation.x-origin.x)*(clickLocation.x-origin.x)+(clickLocation.y-origin.y)*(clickLocation.y-origin.y);
      const ir = zxc.vals[0]/zxc.vals[imax-1]*imax;
      if (rad2 < ir*ir || rad2 > imax*imax) return;
      const radAdjust = Math.floor((rad2**0.5 - ir) / (imax-ir) * imax);

      // get polar location
      const the = Math.atan2(clickLocation.x-origin.x, origin.y-clickLocation.y);
      const theAdjust = Math.floor((the-zyc.vals[0])/(zyc.vals[jmax-1]-zyc.vals[0])*jmax);

      setDataPoint({
         x: Math.max(0,Math.min(imax-1, radAdjust)), 
         y: Math.max(0,Math.min(jmax-1, theAdjust)),
      });
      console.log(radAdjust, theAdjust);
   }

   const polarData = CSMData ? {
      imageData: CSMData.imageData,
      imax: CSMData.imax,
      jmax: CSMData.jmax,
      zxc: CSMData.zxc,
      zyc: CSMData.zyc,
      dataPoint: dataPoint,
      origin: {x: 10, y: CSMData.imax+10},
   } : null;

   useEffect(() => {
      API.getCSMData(mrto, vwind, vrto)
         .then(response => setCSMData(response));
   }, [mrto, vwind, vrto]);

   return <div className={style.buttonContainer}>
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

      <div className={style.canvasGrid}>

         <div className={style.rightGrid}>
            <InteractiveCanvas draw={drawPolarPlot} onInteract={updateDataPoint} data={polarData} setStyle={{width: '100%', height: '100%'}}/>
         </div>
      </div>
      
   </div>;
}

export default CSMApp;