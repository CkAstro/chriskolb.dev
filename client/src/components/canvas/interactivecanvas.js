import { useState, useEffect, useRef } from 'react';

const useInteractiveCanvas = (ctxRef, draw, data) => {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      ctxRef.current = context; 
   }, []);

   useEffect(() => {
      draw(ctxRef.current, data);
   }, [draw, data]);

   return canvasRef;
}

const InteractiveCanvas = ({ draw, onInteract, data, setStyle }) => {
   const [ isActive, setIsActive ] = useState(false);
   const [ mouseLocation, setMouseLocation ] = useState({ x: null, y: null });
   const [ clickLocation, setClickLocation ] = useState({ x: null, y: null });

   const ctxRef = useRef(null);
   const canvasRef = useInteractiveCanvas(ctxRef, draw, data);
   
   // this is necessary to get around 'passive' event listeners
   // see more here: https://github.com/facebook/react/issues/19651
   useEffect(() => {
      const canvas = canvasRef.current;
      canvas.addEventListener('wheel', handleScroll);
      canvas.addEventListener('touchstart', e => e.preventDefault());
      canvas.addEventListener('touchmove', e => e.preventDefault());
   }, []);

   const handleMouseDown = (event, prevent=true) => {
      if (prevent) event.preventDefault();
      const rect = canvasRef.current.getBoundingClientRect();
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         click: location,
         location: location,
         prevLocation: location,
         rect: rect,
         deltaY: null,
         isActive: true,
      }
      onInteract(ctxRef.current, mouseInfo, data);
      setMouseLocation(location);
      setClickLocation(location);
      setIsActive(true);
   }

   const handleMouseUp = (event, prevent=true) => {
      if (prevent) event.preventDefault();
      const rect = canvasRef.current.getBoundingClientRect();
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         click: null,
         location: location,
         prevLocation: location,
         rect: rect,
         deltaY: null,
         isActive: isActive,
      }
      onInteract(ctxRef.current, mouseInfo, data);
      setIsActive(false);
   }

   const handleMouseMove = (event, prevent=true) => {
      if (prevent) event.preventDefault();
      const rect = canvasRef.current.getBoundingClientRect();
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         click: clickLocation,
         location: location,
         prevLocation: mouseLocation,
         rect: rect,
         deltaY: null,
         isActive: isActive,
      }
      onInteract(ctxRef.current, mouseInfo, data);
      setMouseLocation(location);
   }

   const handleMouseLeave = event => {
      event.preventDefault();
      const rect = canvasRef.current.getBoundingClientRect();
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         click: null,
         location: location,
         prevLocation: location,
         rect: rect,
         deltaY: null,
         isActive: isActive,
      }
      onInteract(ctxRef.current, mouseInfo, data);
      setIsActive(false);
   }

   const handleScroll = event => {
      event.preventDefault();
      const rect = canvasRef.current.getBoundingClientRect();
      const location = { x: event.clientX, y: event.clientY };
      const mouseInfo = {
         click: clickLocation,
         location: location,
         prevLocation: mouseLocation,
         rect: rect,
         deltaY: event.deltaY,
         isActive: isActive,
      }
      onInteract(ctxRef.current, mouseInfo, data);
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

   return <canvas ref={canvasRef}
      style={setStyle}

      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onWheel={handleScroll}

      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
   />;
}

export default InteractiveCanvas;