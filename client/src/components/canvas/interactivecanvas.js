import { useState, useEffect, useRef } from 'react';
import style from './canvas.module.css';

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

   const ctxRef = useRef(null);
   const canvasRef = useInteractiveCanvas(ctxRef, draw, data);

   const handleMouseDown = event => {
      event.preventDefault();
      const { top, left } = canvasRef.current.getBoundingClientRect();
      const location = { x: event.clientX-left, y: event.clientY-top };
      setIsActive(true);
      onInteract(location, data);
   }

   const handleMouseUp = event => {
      event.preventDefault();
      setIsActive(false);
   }

   const handleMouseMove = event => {
      event.preventDefault();
      if (!isActive) return;
      const { top, left } = canvasRef.current.getBoundingClientRect();
      const location = { x: event.clientX-left, y: event.clientY-top };
      onInteract(location, data);
   }

   const handleMouseLeave = () => setIsActive(false);

   return <canvas ref={canvasRef}
      style={setStyle}

      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
   />;
}

export default InteractiveCanvas;