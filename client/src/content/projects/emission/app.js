import { useState, useEffect } from 'react';
import { GL2Canvas } from '../../../components/canvas';
import glHelper from './glhelper';
import texHelper from './texhelper';
import buildShader from './shader';
import style from './emission.module.css';

const drawScene = (gl, scene, objects) => {
   if (!texHelper.isInit || texHelper.glInstance !== gl) texHelper.init(gl);
   if (!glHelper.isInit || glHelper.glInstance !== gl) {
      const shader = buildShader(gl);
      glHelper.init(gl, shader);
   }
   glHelper.renderScene(objects, scene, texHelper.textures);
}

const App = () => {
   const [ objs, setObjs ] = useState([null]);
   const [ sliderValue, setSliderValue ] = useState(95);
   const [ editMode, setEditMode ] = useState(false);
   const [ textValue, setTextValue ] = useState('9.5');
   const [ scene, setScene ] = useState({
      nu: 9.5,
      unHideCSM: true, 
      volDim: 256,
      camera: { zoom: -1.5, azi: 0.0, pol: 0.0 }, 
   });

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

   const handleChange = event => {
      const value = event.target.value;
      setSliderValue(value);
      const newScene = {
         ...scene,
         nu: value / 10.0,
      }
      setScene(newScene);
   }

   const toggleCSM = () => {
      const newScene = {
         ...scene,
         unHideCSM: !scene.unHideCSM,
      }
      setScene(newScene);
   }

   const requestValChange = event => {
      event.preventDefault();
      const numValue = Number(textValue);
      if (textValue != numValue) return;
      if (numValue < 7.0 || numValue > 12.0) return;
      setSliderValue(10*numValue)
      const newScene = {
         ...scene,
         nu: numValue,
      }
      setScene(newScene);
      disableEdit();
   }

   const handleInput = event => setTextValue(event.target.value);
   const handleFocus = event => event.target.select();

   const handleKeyPress = event => {
      if (event.keyCode === 27) disableEdit();
   }

   const disableEdit = () => {
      setTextValue(sliderValue / 10.0);
      setEditMode(false);
   }
   const enableEdit = () => setEditMode(true);

   const valChangeArea = <form onSubmit={requestValChange}>
      <input autoFocus className={style.editMode}
         onChange={handleInput}
         value={textValue}
         onKeyDown={handleKeyPress}
         onBlur={disableEdit}
         onFocus={handleFocus}
      />
   </form>;

   const valDisplayArea = <span onDoubleClick={enableEdit}>{`10^${sliderValue/10.0}`}</span>;

   const valDisplay = editMode ? valChangeArea : valDisplayArea;

   useEffect(() => {
      setTimeout(() => {
         const newScene = { ...scene };
         setScene(newScene);
      }, 2000);
   }, []);

   return <div className={style.contentContainer}>
      <h1>Synchrotron Emission from a Supernova</h1>
      <GL2Canvas
         draw={drawScene}
         scene={scene}
         objects={objs}
         onInteract={updateCamera}
         setStyle={{ width: '600px', height: '400px', margin: '0 auto', }}
      />
      <div className={style.controllContainer}>
         <input type='range'
            onChange={handleChange}
            min={70}
            max={120}
            value={sliderValue}
         />
         <div className={`noselect ${style.valDisplay}`}>
            {valDisplay}
         </div>
         <div className={`noselect ${style.csmButton}`} onClick={toggleCSM}>Toggle CSM</div>
      </div>
   </div>;
}

export default App;