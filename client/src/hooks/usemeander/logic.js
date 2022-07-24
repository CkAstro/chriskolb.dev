
const getLocation = (mouse, div, size) => {
   const { top, left, height } = div.getBoundingClientRect();
   return {
      row: (top + height - mouse.y) / size, 
      col: (mouse.x - left) / size
   }
}

const updateLocation = (currentSquare, mouse) => {
   // reset if off screen
   if (mouse.x > window.innerWidth || mouse.y < 0) return {
      row: 1.25,
      col: Math.random() * 3 + 0.5,
   }

   // move either up or right, with slight bias up
   const direction = Math.random() < 0.55;
   return {
      row: currentSquare.row + (direction ? 0.25 : 0),
      col: currentSquare.col + (direction ? 0 : 0.25),
   }
}

const updateMousePosition = (square, div, size) => {
   const { top, left, height } = div.getBoundingClientRect();

   // mouse y axis is down while rows are up in this context
   return {
      x: left + square.col * size,
      y: top + height - square.row * size,
      isActive: false,
   }
}

export {
   getLocation,
   updateLocation,
   updateMousePosition,
}