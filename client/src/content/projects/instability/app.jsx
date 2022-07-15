import { useState, useEffect, useRef } from 'react';
import { GL2Canvas } from 'components/elements';
import GLHelper from './glhelper';
import TextureHelper from './texhelper';
import buildShader from './shader';
import style from './instability.module.css';

// NOTE: this has been ported from pure javascript and still
//    needs to be cleaned up

// private globals
let _showLoadingBar = true;   // for loadingbar quick hack
let _lastScene = null;        // skip render if nothing changed

const drawScene = (gl, {sceneRef, objsRef, texRef, renderRef}) => {
   const scene = sceneRef.current;
   const objects = objsRef.current || [null];
   const texHelper = texRef.current;
   const glHelper = renderRef.current;

   _showLoadingBar = texHelper.loaded !== 41;
   if (_lastScene === scene) return;
   _lastScene = sceneRef.current;

   if (!texHelper.isInit || texHelper.glInstance !== gl) {
      _showLoadingBar = true;
      texHelper.init(gl);
   }

   if (!glHelper.isInit || glHelper.glInstance !== gl) {
      const shader = buildShader(gl);
      glHelper.init(gl, shader);
   }

   glHelper.renderScene(objects, scene, texHelper.textures);
}

const App = () => {
   const [ slowMo, setSlowMo ] = useState(false);
   const [ pause, _setPause ] = useState(false);
   const [ canvasWidth, setCanvasWidth ] = useState(Math.min(500, window.innerWidth));
   const [ isLoaded, setIsLoaded ] = useState(false);
   const [ scene, _setScene ] = useState({
      volDim: 256,
      image: 0,
      camera: { zoom: -4, azi: 60, pol: 20 }, 
   });

   const sceneRef = useRef(scene);
   const setScene = data => {
      sceneRef.current = data;
      _setScene(data);
   }

   useEffect(() => {
      setCanvasWidth(Math.min(500, window.innerWidth));
   }, [window.innerWidth]);

   const incrementImage = arg => {
      if (pauseRef.current && !arg) return;
      const nextCount = sceneRef.current.image > texRef.current.textures.data.length-2 ? 0 : sceneRef.current.image + 1;
      const newScene = {
         ...sceneRef.current,
         image: nextCount,
      }
      setScene(newScene);
   }

   const decrementImage = () => {
      if (!pauseRef.current) return;
      const nextCount = sceneRef.current.image === 0 ? 40 : sceneRef.current.image - 1;
      const newScene = {
         ...sceneRef.current,
         image: nextCount,
      }
      setScene(newScene);
   }

   useEffect(() => {
      const increment = slowMo ? 200 : 50;
      const play = setInterval(() => incrementImage(), increment);
      return () => clearInterval(play);
   }, [slowMo]);

   const updateCamera = (gl, mouseInfo) => {
      const newScene = { ...scene };
      if (mouseInfo.deltaY) {
         newScene.camera.zoom = newScene.camera.zoom - mouseInfo.deltaY/1000;
      } else if (!mouseInfo.isActive || !mouseInfo.lastMouseLocation) {
         return;
      } else {
         newScene.camera.azi = newScene.camera.azi - (mouseInfo.lastMouseLocation.x - mouseInfo.mouseLocation.x);
         newScene.camera.pol = newScene.camera.pol - (mouseInfo.lastMouseLocation.y - mouseInfo.mouseLocation.y);
      }
      setScene(newScene);
   }

   const pauseRef = useRef(pause);
   const setPause = data => {
      pauseRef.current = data;
      _setPause(data);
   }
   
   const handlePause = () => setPause(!pauseRef.current);
   const handleSlowMotion = () => {
      setSlowMo(!slowMo);
      setPause(false);
   }

   const handlePrev = () => decrementImage();
   const handleNext = () => incrementImage(true);

   const prevButton = <div className={`noselect ${style.interactButton} ${pause ? '' : style.hidden}`} onClick={handlePrev}>&laquo; prev</div>;
   const pauseButton = <div className={`noselect ${style.interactButton} ${pause ? style.active : ''}`} onClick={handlePause}>{pause ? 'play' : 'pause'}</div>;
   const slowmoButton = <div className={`noselect ${style.interactButton} ${slowMo ? style.active : ''}`} onClick={handleSlowMotion}>{slowMo ? 'normal' : 'slow-mo'}</div>;
   const nextButton = <div className={`noselect ${style.interactButton} ${pause ? '' : style.hidden}`} onClick={handleNext}>next &raquo;</div>;

   const texHelper = new TextureHelper;
   const glHelper = new GLHelper;

   const texRef = useRef(texHelper);
   const renderRef = useRef(glHelper);
   const objsRef = useRef(null);

   useEffect(() => {
      if (_showLoadingBar) return setIsLoaded(false);
      setIsLoaded(true);
   }, [_showLoadingBar]);

   return (
      <>
         <div className={style.buttonContainer}>
            {prevButton}
            {pauseButton}
            {slowmoButton}
            {nextButton}
         </div>
         <div className={style.canvasContainer}>
            <GL2Canvas
               draw={drawScene}
               onInteract={updateCamera}
               setStyle={{ width: `${canvasWidth}px`, height: `${4/5*canvasWidth}px`}}
               sceneRef={sceneRef}
               objsRef={objsRef}
               texRef={texRef}
               renderRef={renderRef}
            />
            <div className={style.loadingBar} style={isLoaded ? {display: 'none'} : {}}>
               <div>Loading...</div>
            </div>
         </div>
      </>
   );
}

export default App;