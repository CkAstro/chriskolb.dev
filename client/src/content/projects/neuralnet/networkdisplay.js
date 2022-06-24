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

const NetworkDisplay = ({ draw, mask }) => {
   const [ networkData, setNetworkData ] = useState(null);
   const [ layer1Data, setLayer1Data ] = useState([]);

   // get network data on init
   useEffect(() => {
      API.getNeuralNet().then(data => setNetworkData(data));
   }, []);

   // set layer data
   useEffect(() => {
      if (!networkData) return;
      let layerData = [];
      for (let i=0; i<16; i++) {
         const weights = networkData.layer1.weights[i];
         const bias = networkData.layer1.biases[i];
         layerData = layerData.concat({ weights, bias });
      }
      setLayer1Data(layerData);
   }, [networkData]);


   const getNetworkNodes = () => layer1Data.map((node, ind) => {
      return <Neuron key={ind} draw={draw} weights={node.weights} mask={mask}/>;
   });

   return <div className={style.networkDisplay}>
      {getNetworkNodes()}
   </div>;
}

export default NetworkDisplay;