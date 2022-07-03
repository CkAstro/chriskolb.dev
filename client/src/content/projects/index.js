import { useRef, memo } from 'react';
import Cluster from '../../components/cluster';
import Reversi from './reversi';
import DataVis from './datavis';
import NeuralNet from './neuralnet';
import Emission from './emission';
import CSM from './csm';
import Instability from './instability';
import useIsVisible from '../../hooks/useisvisible';
import style from './projects.module.css';

const FullStackHeader = () => {
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   return <div ref={divRef} className={`${style.headerContainer} ${isVisible ? style.active : null}`}>
      <h1 className={style.style1}>Select <span style={{fontWeight: '700'}}>full stack</span> projects</h1>
   </div>
}

const InteractiveHeader = () => {
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   return <div ref={divRef} className={`${style.headerContainer} ${isVisible ? style.active : null}`}>
      <h1 className={style.style2}><span style={{fontWeight: '700'}}>Interactive</span> figures</h1>
   </div>
}

const Projects = () => {
   return <>
      <FullStackHeader/>
      <Reversi/>
      <DataVis/>
      <NeuralNet/>
      
      <InteractiveHeader/>
      <Cluster>
         <Emission/>
         <CSM/>
         <Instability/>
      </Cluster>
   </>;
}

export default memo(Projects);