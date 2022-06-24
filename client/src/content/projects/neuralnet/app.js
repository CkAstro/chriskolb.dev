import { useState, useEffect } from 'react';
import NetworkInput from './networkinput';
import NetworkDisplay from './networkdisplay';
import utils from './utils';
import style from './neuralnet.module.css';

const drawCanvas = (ctx, data) => {
   if (!data) {
      const img = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
      for (let i=0; i<img.data.length; i++) {
         img.data[i] = 255;
      }
      return ctx.putImageData(img, 0, 0);
   } 
   const img = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
   for (let i=0; i<img.data.length; i++) {
      img.data[i] = data[i];
   }
   return ctx.putImageData(img, 0, 0);
}

const App = () => {
   const [ input, setInput ] = useState(null);
   const [ mask, setMask ] = useState(null);
   const [ normalizedInput, setNormalizedInput ] = useState(null);

   const handleInteract = (ctx, mouseInfo, data) => {
      if (!mouseInfo.isActive) return;
      const { top, left, width, height } = mouseInfo.rect;
      // check for mouse-up
      if (!mouseInfo.click) {
         const imageData = ctx.getImageData(0, 0, width, height);
         setInput(imageData.data);
      }
      const thisPos = {
         x: mouseInfo.location.x-left,
         y: mouseInfo.location.y-top,
      }
      const lastPos = {
         x: mouseInfo.prevLocation.x-left,
         y: mouseInfo.prevLocation.y-top,
      }
      utils.drawLineSegment(ctx, lastPos, thisPos);
   }

   // when input is updated (after draw complete), 
   useEffect(() => {
      if (!input) return;
      const scaled = utils.scaleDownData(input);
      const mask = utils.normalizeData(scaled);
      const normalized = utils.scaleUpData(mask, false);
      setMask(mask);
      setNormalizedInput(normalized);
   }, [input]);

   const handleClear = () => {
      setInput(null);
      setMask(null);
      setNormalizedInput(null);
   }

   return <div className={style.contentContainer}>
      <h1>Neural Network</h1>
      <div className={style.networkContainer}>
         <NetworkInput
            onInteract={handleInteract}
            draw={drawCanvas}
            inputData={input}
            outputData={normalizedInput}
            handleClear={handleClear}
         />
         <NetworkDisplay draw={drawCanvas} mask={mask}/>
      </div>
   </div>
}

export default App;