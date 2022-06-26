import ContentSection from '../../components/contentsection';
import reversi from './reversi';
import datavis from './datavis';
import neuralnet from './neuralnet';
import emission from './emission';
import csm from './csm';
import instability from './instability';

const projectList = [
   datavis,
   reversi,
   neuralnet,
   emission,
   csm,
   instability,
];

const Projects = () => {
   return <ContentSection 
      title='Developer Projects' 
      content={projectList}
      styleAdjust={{background: 'var(--main-background)'}} 
   />
}

export default Projects;