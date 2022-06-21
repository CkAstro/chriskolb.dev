import { InteractiveCanvas } from '../../../components/canvas';
const pi = Math.PI;
const _boxSize = 4;

const createImage = (ctx, {imax, imageData}) => {
   const xSize = imax;
   const ySize = imax*2;    // purposefully using imax
   const image = ctx.createImageData(xSize, ySize);
   for (let i=0; i<xSize; i++) {
      for (let j=0; j<ySize; j++) {
         const dataPos = i*ySize+j;
         for (let k=0; k<4; k++) {
            const imgPos = 4*dataPos+k;
            image.data[imgPos] = imageData[dataPos][k];
         }
      }
   }
   return image;
}

const drawGrid = (ctx, {origin, zxc, imax}) => {
   const ir = zxc.vals[0] / zxc.vals[imax-1] * imax;
   const or = imax;

   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(origin.x, origin.y, or, -pi/2.0, pi/2.0, false);   // outer arc
   ctx.lineTo(origin.x, origin.y+ir);
   ctx.arc(origin.x, origin.y, ir, pi/2.0, -pi/2.0, true);    // inner arc
   ctx.lineTo(origin.x, origin.y-or);
   ctx.stroke();

   ctx.lineWidth = 1;
   return;
}

const drawRadialAxis = (ctx, {origin, the0, rad1, rad2, ir, or}) => {
   ctx.strokeStyle = 'red';
   ctx.lineWidth = 2;
   ctx.setLineDash([5,5]);
   ctx.beginPath();
   ctx.moveTo(origin.x+ir*Math.sin(the0), origin.y-ir*Math.cos(the0));
   if (rad1 > ir)ctx.lineTo(origin.x+rad1*Math.sin(the0), origin.y-rad1*Math.cos(the0));
   ctx.moveTo(origin.x+or*Math.sin(the0), origin.y-or*Math.cos(the0));
   if (rad2 < or) ctx.lineTo(origin.x+rad2*Math.sin(the0), origin.y-rad2*Math.cos(the0));
   ctx.stroke();

   // clean up and return
   ctx.strokeStyle = 'black';
   ctx.lineWidth = 1;
   ctx.setLineDash([]);
   return;
}

const drawAngularAxis = (ctx, {origin, rad0, the1, the2, ir, or}) => {
   // we draw arcs as we do so the dashes remain consistent
   // they will always start at start of arc, so starting 
   //    arc at the box looks ugly
   const dashScale = rad0 / or;
   ctx.strokeStyle = 'red';
   ctx.lineWidth = 2;
   ctx.setLineDash([8*dashScale, 8*dashScale]);    // scale dashing
   ctx.beginPath();
   if (the1 > -pi/2.0) ctx.arc(origin.x, origin.y, rad0, -pi/2.0, the1, false);
   ctx.moveTo(origin.x, origin.y+rad0);
   if (the2 < pi/2) ctx.arc(origin.x, origin.y, rad0, pi/2, the2, true);
   ctx.stroke();

   // clean up and return
   ctx.strokeStyle = 'black';
   ctx.lineWidth = 1;
   ctx.setLineDash([]);
   return;
}

const drawLocationBox = (ctx, {xloc, yloc}) => {
   ctx.strokeStyle = 'white';
   ctx.lineWidth = 2;

   ctx.beginPath();
   ctx.rect(xloc-_boxSize, yloc-_boxSize, 2*_boxSize+1, 2*_boxSize+1);
   ctx.stroke();

   // clean up and return
   ctx.strokeStyle = 'black';
   ctx.lineWidth = 1;
   return;
}

const drawCrosshair = (ctx, {zxc, zyc, imax, jmax, dataPoint, origin}) => {
   const zxcScaled = zxc.vals.map(val => imax*val/zxc.vals[imax-1]);
   const ir = zxc.vals[0] / zxc.vals[imax-1] * imax;
   const or = imax;

   const rad0 = zxcScaled[dataPoint.x];
   const the0 = zyc.vals[dataPoint.y];
   const xloc = rad0*Math.sin(the0)+origin.x;
   const yloc = origin.y-rad0*Math.cos(the0);

   const xtmp = rad0*Math.sin(the0);
   const ytmp = rad0*Math.cos(the0);

   let rad1, rad2, the1, the2;
   if (the0 < pi/4.0) {
      rad1 = (ytmp-_boxSize)/Math.cos(the0);
      rad2 = (ytmp+_boxSize)/Math.cos(the0);
      the1 = Math.asin((xtmp-_boxSize)/rad0)-pi/2.0;
      the2 = Math.asin((xtmp+_boxSize)/rad0)-pi/2.0;
   } else if (the0 < pi/2.0) {
      rad1 = (xtmp-_boxSize)/Math.sin(the0);
      rad2 = (xtmp+_boxSize)/Math.sin(the0);
      the1 = Math.acos((ytmp+_boxSize)/rad0)-pi/2.0;
      the2 = Math.acos((ytmp-_boxSize)/rad0)-pi/2.0;
   } else if (the0 < 3*pi/4.0) {
      rad1 = (xtmp-_boxSize)/Math.sin(the0);
      rad2 = (xtmp+_boxSize)/Math.sin(the0);
      the1 = Math.acos((ytmp+_boxSize)/rad0)-pi/2.0;
      the2 = Math.acos((ytmp-_boxSize)/rad0)-pi/2.0;
   } else {
      rad1 = (ytmp+_boxSize)/Math.cos(the0);
      rad2 = (ytmp-_boxSize)/Math.cos(the0);
      the1 =-Math.asin((xtmp+_boxSize)/rad0)+pi/2.0;
      the2 =-Math.asin((xtmp-_boxSize)/rad0)+pi/2.0;
   }

   drawRadialAxis(ctx, {origin, the0, rad1, rad2, ir, or});
   drawAngularAxis(ctx, {origin, rad0, the1, the2, ir, or});
   drawLocationBox(ctx, {xloc, yloc});
   return;
}


const drawPolarPlot = (ctx, data) => {
   if (!data) return;
   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   const origin = data.origin;
   
   // load and display image data
   const polarImage = createImage(ctx, data);
   ctx.putImageData(polarImage, origin.x, origin.y-data.imax);

   // draw crosshairs
   drawCrosshair(ctx, data);

   // draw grid overlay last (cover crosshairs)
   drawGrid(ctx, data);
}


const PolarPlot = ({ data, setDataPoint }) => {


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

   return <InteractiveCanvas
      draw={drawPolarPlot}
      onInteract={updateDataPoint}
      data={data}
      setStyle={{width: '100%', height: '100%'}}
   />
}

export default PolarPlot;