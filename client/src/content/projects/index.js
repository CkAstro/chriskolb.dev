import Cluster from '../../components/cluster';
import Reversi from './reversi';
import DataVis from './datavis';
import NeuralNet from './neuralnet';
import Emission from './emission';
import CSM from './csm';
import Instability from './instability';

const Projects = () => {
   return <>
      <h1>Full Stack Projects</h1>
      <Reversi/>
      <DataVis/>
      <NeuralNet/>

      <h1>Select Front-End</h1>
      <Cluster>
         <Emission/>
         <CSM/>
         <Instability/>
      </Cluster>
   </>;
}

export default Projects;