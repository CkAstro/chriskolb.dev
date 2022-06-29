import { useState, useRef, useEffect } from "react";
import { GL2Canvas } from "../../components/canvas";
import glHelper from './glhelper';
import texHelper from './texhelper';
import buildShader from './shader';


const drawScene = (gl, scene, objects) => {
   if (gl.canvas.getBoundingClientRect().bottom < 1) return;
   if (!texHelper.isInit || texHelper.glInstance !== gl) texHelper.init(gl);
   if (!glHelper.isInit || glHelper.glInstance !== gl) {
      const shader = buildShader(gl);
      glHelper.init(gl, shader);
   }
   glHelper.renderScene(objects, scene, texHelper.textures);
}

const Intro = () => {
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
      const play = setInterval(() => incrementImage(), 50);
      return () => clearInterval(play);
   }, []);

   const incrementImage = () => {
      const nextCount = sceneRef.current.image === 40 ? 0 : sceneRef.current.image + 1;
      const newScene = {
         ...scene,
         image: nextCount,
      }
      setScene(newScene);
   }

   const updateCamera = (gl, mouseInfo) => {
      return;
   }
   
   return <GL2Canvas
      draw={drawScene}
      scene={scene}
      objects={[null]}
      onInteract={updateCamera}
      setStyle={{
         position: 'absolute',
         top: '0',
         left: '0',
         right: '0',
         bottom: '0',
      }}
      canvasStyle={{ width: `${window.innerWidth}px`, height: `${window.innerHeight}px` }}
   />;
}

export default Intro;