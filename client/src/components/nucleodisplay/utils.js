
const range = (start, end) => {
   let items = [];
   for (let i=start; i<end+1; i++) {
      items = items.concat(i);
   }
   return items;
}

// reference: https://upload.wikimedia.org/wikipedia/commons/b/b5/NuclideMap_stitched.png
const nucleoChart = [
   {element: 'Si', isotopes: range(22, 44), stable: [28, 29, 30]},
   {element: 'Al', isotopes: range(21, 42), stable: [27]},
   {element: 'Mg', isotopes: range(19, 40), stable: [24, 25, 26]},
   {element: 'Na', isotopes: range(18, 37), stable: [23], exclude: [36]},
   {element: 'Ne', isotopes: range(16, 34), stable: [20, 21, 22], exclude: [33]},
   {element: 'F', isotopes: range(14, 31), stable: [19]},
   {element: 'O', isotopes: range(12, 28), stable: [16, 17, 18]},
   {element: 'N', isotopes: range(10, 25), stable: [14, 15]},
   {element: 'C', isotopes: range(8, 22), stable: [12, 13]},
   {element: 'B', isotopes: range(6, 19), stable: [10, 11]},
   {element: 'Be', isotopes: range(5, 16), stable: [9]},
   {element: 'Li', isotopes: range(3, 12), stable: [6, 7]},
   {element: 'He', isotopes: range(3, 10), stable: [3, 4]},
   {element: 'H', isotopes: range(1, 7), stable: [1, 2]},
   {element: 'N', isotopes: [null], stable: []},
];

export { nucleoChart, range };