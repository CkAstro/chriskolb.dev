import { useState } from 'react';
import ButtonGroup from '../../components/buttongroup';
import style from './csm.module.css';

const CSMApp = () => {
   const [ mrto, setMrto ] = useState('10');
   const [ vwind, setVwind ] = useState('15');
   const [ vrto, setVrto ] = useState('075');

   return <div className={style.buttonContainer}>
      <ButtonGroup setter={setMrto} header={'Mass Ratio'}>{[
         {text: '1.0', value: '10'},
         {text: '1.5', value: '15'},
         {text: '2.0', value: '20'},
         {text: '2.5', value: '25'},
      ]}</ButtonGroup>
      <ButtonGroup setter={setVwind} header={'Wind Speed'}>{[
         {text: '15', value: '15'},
         {text: '20', value: '20'},
         {text: '25', value: '25'},
      ]}</ButtonGroup>
      <ButtonGroup setter={setVrto} header={'Speed Ratio'}>{[
         {text: '0.75', value: '075'},
         {text: '1.0', value: '10'},
         {text: '1.5', value: '15'},
         {text: '2.0', value: '20'},
      ]}</ButtonGroup>
      <p>{`${mrto}-${vwind}-${vrto}`}</p>
   </div>;
}

export default CSMApp;