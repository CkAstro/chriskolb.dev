import { useState, useEffect } from 'react';
import style from './neuralnet.module.css';

const NetworkDisplay = ({ mask }) => {
   const [ networkData, setNetworkData ] = useState(null);
   const [ layer1Data, setLayer1Data ] = useState([]);

   useEffect(() => {
      // API.getNeuralNet
   }, []);

   return <div/>;
}

export default NetworkDisplay;