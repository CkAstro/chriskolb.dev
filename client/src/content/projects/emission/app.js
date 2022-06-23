import { useState } from 'react';
import { GL2Canvas } from '../../../components/canvas';
import glHelper from './glhelper';
import texHelper from './texhelper';
import buildShader from './shader';

const drawScene = (gl, scene, objects) => {
   if (!texHelper.isInit) texHelper.init(gl);
   if (!glHelper.isInit) {
      const shader = buildShader(gl);
      glHelper.init(gl, shader);
   }
   glHelper.renderScene(objects, scene, texHelper.textures);
}

const App = () => {
   const [ scene, setScene ] = useState({
      isInit: false,
      camera: { zoom: -2.0, azi: 0.0, pol: 0.0 }, 
   });
   const [ objs, setObjs ] = useState([null]);

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

   return <GL2Canvas
      draw={drawScene}
      scene={scene}
      objects={objs}
      onInteract={updateCamera}
      setStyle={{ width: '600px', height: '500px', margin: 'auto', }}
   />;
}

export default App;