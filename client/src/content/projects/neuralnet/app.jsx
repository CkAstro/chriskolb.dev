import { useState, useEffect } from 'react';
import NetworkInput from './networkinput';
import NetworkOutput from './networkoutput';
import NetworkDisplay from './networkdisplay';
import api from 'api';
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
   const [ output, setOutput ] = useState(Array(10).fill({z: null, a: null, i: null}));
   const [ userResponse, setUserResponse ] = useState(null);
   const [ displayIsHidden, setDisplayIsHidden ] = useState(false);

   useEffect(() => {
      if (window.innerWidth < 830) return setDisplayIsHidden(true);
      setDisplayIsHidden(false);
   }, [window.innerWidth]);

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
      setOutput(Array(10).fill({z: null, a: null, i: null}));
      setUserResponse(null);
   }

   const buildGuess = () => {
      const maxVal = Math.max( ...output.map(n => n.a) );
      const guess = output.filter((n, ind) => n.a === maxVal);
      return guess[0]
         ? (<>
            <p>Is your number is a <span className={style.guess}>{guess[0].i}</span></p>
            <p>{`(${(guess[0].a*100).toFixed()}% certainty)`}</p>
            <p>Is this correct?</p>
            <div className={style.responseContainer}>
               <div onClick={() => setUserResponse('yes')}>Yes</div>
               <div onClick={() => setUserResponse('no')}>No</div></div>
            </>)
         : null
      ;
   }

   const handleSubmit = ind => {
      api.putNeuralNet({ mask, output, userResponse, guess: ind })
         .then(() => setUserResponse('submit'));
   }

   const afterResponseMessage = (
      <div className={style.responseMessage}>
         <p>If you would like to help build this system, please select the number you drew from above, and it will be submitted to the server.</p>
      </div>
   );

   const afterSubmitMessage = (
      <div className={style.responseMessage}>
         <p>Thank you for helping to build the network!</p>
      </div>
   );

   const networkDisplay = displayIsHidden 
      ? <NetworkDisplay draw={() => null} mask={mask} setOutput={setOutput}/> 
      : <NetworkDisplay draw={drawCanvas} mask={mask} setOutput={setOutput}/>
   ;

   const guessAreaMessage = userResponse
      ? (userResponse === 'submit'
         ? afterSubmitMessage
         : afterResponseMessage)
      : buildGuess()
   ;

   return (
      <div className={style.networkContainer}>
         <div className={style.interactContainer}>
            <NetworkInput
               onInteract={handleInteract}
               draw={drawCanvas}
               inputData={input}
               outputData={normalizedInput}
            />
            <NetworkOutput output={output} handleClear={handleClear} handleSubmit={handleSubmit} userResponse={userResponse}/>
            <div className={style.guessContainer}>{guessAreaMessage}</div>
         </div>
         {networkDisplay}
      </div>
   );
}

export default App;