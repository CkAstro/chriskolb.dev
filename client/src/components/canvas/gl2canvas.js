import { useState, useEffect, useRef } from 'react';

const useGL2Canvas = (glRef, draw, scene, objects) => {
   const canvasRef = useRef(null);

   // init gl instance
   useEffect(() => {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl2');
      gl.getExtension('OES_texture_float_linear');

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
      glRef.current = gl;
   }, []);

   // redraw scene on change
   useEffect(() => {
      draw(glRef.current, scene, objects);
   }, [draw, scene, objects]);

   return canvasRef;
}

const GL2Canvas = ({ draw, scene, objects, onInteract, setStyle, canvasStyle }) => {
   const [ isActive, setIsActive ] = useState(false);
   const [ mouseLocation, setMouseLocation ] = useState({ x: null, y: null });
   const [ clickLocation, setClickLocation ] = useState({ x: null, y: null });

   const glRef = useRef(null);
   const canvasRef = useGL2Canvas(glRef, draw, scene, objects);
   
   // this is necessary to get around 'passive' event listeners
   // see more here: https://github.com/facebook/react/issues/19651
   useEffect(() => {
      const canvas = glRef.current.canvas;
      canvas.addEventListener('wheel', handleScroll);
      canvas.addEventListener('touchstart', e => e.preventDefault());
      canvas.addEventListener('touchmove', e => e.preventDefault());
   }, []);

   const handleMouseDown = event => {
      event.preventDefault();
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         clickLocation: location,
         mouseLocation: location,
         lastMouseLocation: mouseLocation,
         deltaY: null,
         isActive: true,
      }

      onInteract(glRef.current, mouseInfo);
      setMouseLocation(location);
      setClickLocation(location);
      setIsActive(true);
   }

   const handleMouseUp = event => {
      event.preventDefault();
      setIsActive(false);
   }

   const handleMouseMove = event => {
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         clickLocation: clickLocation,
         mouseLocation: location,
         lastMouseLocation: mouseLocation,
         deltaY: null,
         isActive: isActive,
      }

      onInteract(glRef.current, mouseInfo);
      setMouseLocation(location);
   }

   const handleMouseLeave = () => setIsActive(false);

   const handleScroll = event => {
      event.preventDefault();
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         clickLocation: clickLocation,
         mouseLocation: location,
         lastMouseLocation: mouseLocation,
         deltaY: event.deltaY,
         isActive: isActive,
      }

      onInteract(glRef.current, mouseInfo);
   }

   const handleTouchStart = event => {
      handleMouseDown(event.nativeEvent.changedTouches[0]);
   }

   const handleTouchEnd = event => {
      handleMouseDown(event.nativeEvent.changedTouches[0]);
   }

   const handleTouchMove = event => {
      handleMouseMove(event.nativeEvent.changedTouches[0]);
   }

   return <div style={setStyle}>
      <canvas ref={canvasRef}
         style={canvasStyle}

         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         onWheel={handleScroll}

         onTouchStart={handleTouchStart}
         onTouchEnd={handleTouchEnd}
         onTouchMove={handleTouchMove}
      />
   </div>;
}

export default GL2Canvas;