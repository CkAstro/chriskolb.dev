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
   const handleSlowMotion = () => setSlowMo(!slowMo);
   const handlePrev = () => decrementImage();
   const handleNext = () => incrementImage(true);


   return <div className={style.contentContainer}>
      <h1>A Rayleigh-Taylor Instability</h1>
      <GL2Canvas
         draw={drawScene}
         scene={scene}
         objects={[null]}
         onInteract={updateCamera}
         setStyle={{ width: '500px', height: '400px', margin: '0 auto', background: 'black' }}
      />
      <div className={style.buttonContainer}>
         <div className={`noselect ${style.interactButton}`} onClick={handlePrev}>&laquo; prev</div>
         <div className={`noselect ${style.interactButton} ${pause ? style.active : null}`} onClick={handlePause}>pause</div>
         <div className={`noselect ${style.interactButton} ${slowMo ? style.active : null}`} onClick={handleSlowMotion}>slow-mo</div>
         <div className={`noselect ${style.interactButton}`} onClick={handleNext}>next &raquo;</div>
      </div>
   </div>
}

export default App;