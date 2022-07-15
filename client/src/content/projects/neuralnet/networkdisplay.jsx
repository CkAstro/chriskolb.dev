import { useState, useEffect } from 'react';
import { InteractiveCanvas } from '../../../components/canvas';
import API from '../../../api';
import style from './neuralnet.module.css';
import utils from './utils';

const Neuron = ({ draw, weights, mask }) => {
   const maskedWeights = mask 
      ? utils.scaleUpData(weights, true, mask) 
      : utils.scaleUpData(weights)
   ;
   return <InteractiveCanvas
      draw={draw}
      onInteract={() => null}
      data={maskedWeights}
      setStyle={{width: '112px', height: '112px'}}
   />
}

const NetworkDisplay = ({ draw, mask, setOutput }) => {
   const [ networkData, setNetworkData ] = useState(null);
   const [ layer1Data, setLayer1Data ] = useState([]);
   const [ layer2Data, setLayer2Data ] = useState([]);
   const [ layer1Activation, setLayer1Activation ] = useState([]);

   // get network data on init
   useEffect(() => {
      API.getNeuralNet().then(data => setNetworkData(data));
   }, []);

   // set layer data
   useEffect(() => {
      if (!networkData) return;
      let l1Data = [];
      for (let i=0; i<16; i++) {
         const weights = networkData.layer1.weights[i];
         const bias = networkData.layer1.biases[i];
         l1Data = l1Data.concat({ weights, bias });
      }
      setLayer1Data(l1Data);

      let l2Data = [];
      for (let i=0; i<10; i++) {
         const weights = networkData.layer2.weights[i];
         const bias = networkData.layer2.biases[i];
         l2Data = l2Data.concat({ weights, bias });
      }
      setLayer2Data(l2Data);
   }, [networkData]);

   useEffect(() => {
      if (!mask) return setOutput(Array(10).fill({z: null, a: null}));
      const l1Active = layer1Data.map((data, ind) => {
         let z = data.bias;
         for (let i=0; i<data.weights.length; i++) {
            z += data.weights[i] * (255 - mask[i])/255.0;
         }
         return { z: z, a: 1.0 / (1.0 + Math.exp(-z)), i: ind };
      });
      setLayer1Activation(l1Active);

      const l2Active = layer2Data.map((data, ind) => {
         let z = data.bias;
         for (let i=0; i<data.weights.length; i++) {
            z += data.weights[i] * l1Active[i].a;
         }
         return { z: z, a: 1.0 / (1.0 + Math.exp(-z)), i: ind };
      });

      setOutput(l2Active);
   }, [mask]);


   const getNetworkNodes = () => layer1Data.map((node, ind) => {
      return <Neuron key={ind} draw={draw} weights={node.weights} mask={mask}/>;
   });

   return <div className={style.displayContainer}>
      {getNetworkNodes()}
   </div>;
}

export default NetworkDisplay;