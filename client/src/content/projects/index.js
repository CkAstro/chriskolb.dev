import { memo } from 'react';
import Cluster from '../../components/cluster';
import Reversi from './reversi';
import DataVis from './datavis';
import NeuralNet from './neuralnet';
import Emission from './emission';
import CSM from './csm';
import Instability from './instability';
import style from './projects.module.css';

const Projects = () => {
   return <>
   {console.log('rendering projects!')}
      <div className={style.headerContainer}>
         <h1 className={style.style1}>Full Stack</h1>
      </div>
      <Reversi/>
      <DataVis/>
      <NeuralNet/>

      <div className={style.headerContainer}>
         <h1 className={style.style2}>Select Front-End</h1>
      </div>
      <Cluster>
         <Emission/>
         <CSM/>
         <Instability/>
      </Cluster>
   </>;
}

export default memo(Projects);