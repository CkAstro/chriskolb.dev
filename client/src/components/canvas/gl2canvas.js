import { useState, useEffect, useRef } from 'react';

const useGL2Canvas = (glRef, draw, setStyle, args) => {
   const canvasRef = useRef(null);
   const renderRef = useRef(null);

   const animate = time => {
      draw(glRef.current, args);
      renderRef.current = requestAnimationFrame(animate);
   }

   // init gl instance
   useEffect(() => {
      const canvas = canvasRef.current;
      const gl = canvas.getContext('webgl2');
      gl.getExtension('OES_texture_float_linear');

      canvas.width = setStyle.width.slice(0, -2);
      canvas.height = setStyle.height.slice(0, -2);
      gl.viewport(0, 0, canvas.width, canvas.height);
      glRef.current = gl;

      renderRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(renderRef.current);
   }, []);

   return canvasRef;
}

const GL2Canvas = ({ draw, onInteract, setStyle, ...args }) => {
   const [ isActive, setIsActive ] = useState(false);
   const [ mouseLocation, setMouseLocation ] = useState({ x: null, y: null });
   const [ clickLocation, setClickLocation ] = useState({ x: null, y: null });

   const glRef = useRef(null);
   const canvasRef = useGL2Canvas(glRef, draw, setStyle, args);
   
   // this is necessary to get around 'passive' event listeners
   // see more here: https://github.com/facebook/react/issues/19651
   useEffect(() => {
      const canvas = glRef.current.canvas;
      canvas.addEventListener('wheel', handleScroll);
      canvas.addEventListener('touchstart', e => e.preventDefault());
      canvas.addEventListener('touchmove', e => e.preventDefault());
   }, []);

   const handleMouseDown = (event, prevent=true) => {
      if (prevent) event.preventDefault();
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

   const handleMouseUp = (event, prevent=true) => {
      if (prevent) event.preventDefault();
      setIsActive(false);
   }

   const handleMouseMove = (event, prevent=true) => {
      if (prevent) event.preventDefault();
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
      handleMouseDown(event.nativeEvent.changedTouches[0], false);
   }

   const handleTouchEnd = event => {
      handleMouseUp(event.nativeEvent.changedTouches[0], false);
   }

   const handleTouchMove = event => {
      handleMouseMove(event.nativeEvent.changedTouches[0], false);
   }

   return (
      <canvas 
         ref={canvasRef}
         style={setStyle}

         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         onWheel={handleScroll}

         onTouchStart={handleTouchStart}
         onTouchEnd={handleTouchEnd}
         onTouchMove={handleTouchMove}
      />
   );
}

export default GL2Canvas;