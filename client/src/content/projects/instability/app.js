import { useState, useEffect, useRef } from 'react';
import { GL2Canvas } from '../../../components/canvas';
import glHelper from './glhelper';
import texHelper from './texhelper';
import buildShader from './shader';
import style from './instability.module.css';

const drawScene = (gl, scene, objects) => {
   if (!texHelper.isInit || texHelper.glInstance !== gl) texHelper.init(gl);
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
      const nextCount = sceneRef.current.image === 40 ? 0 : sceneRef.current.image + 1;
      const newScene = {
         ...scene,
         image: nextCount,
      }
      setScene(newScene);
   }

   const decrementImage = () => {
      if (!pauseRef.current) return;
      const nextCount = sceneRef.current.image === 0 ? 40 : sceneRef.current.image - 1;
      const newScene = {
         ...scene,
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
         newScene.camera.zoom = newScene.camera.zoom - mouseInfo.deltaY/2000;
      } else if (!mouseInfo.isActive) {
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
   const pauseButton = <div className={`noselect ${style.interactButton} ${pause ? style.active : null}`} onClick={handlePause}>{pause ? 'play' : 'pause'}</div>;
   const slowmoButton = <div className={`noselect ${style.interactButton} ${slowMo ? style.active : null}`} onClick={handleSlowMotion}>{slowMo ? 'normal' : 'slow-mo'}</div>;
   const nextButton = <div className={`noselect ${style.interactButton} ${pause ? '' : style.hidden}`} onClick={handleNext}>next &raquo;</div>;


   return <>
      <GL2Canvas
         draw={drawScene}
         scene={scene}
         objects={[null]}
         onInteract={updateCamera}
         setStyle={{ width: `${canvasWidth}px`, height: '400px', margin: '0 auto' }}
         canvasStyle={{ width: `${canvasWidth}px`, height: '400px', background: 'black' }}
      />
      <div className={style.buttonContainer}>
         {prevButton}
         {pauseButton}
         {slowmoButton}
         {nextButton}
      </div>
   </>;
}

export default App;