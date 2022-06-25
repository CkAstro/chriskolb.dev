import ContentSection from '../../components/contentsection';
import reversi from './reversi';
import datavis from './datavis';
import neuralnet from './neuralnet';
import emission from './emission';
import csm from './csm';
import instability from './instability';

const projectList = [
   reversi,
   datavis,
   neuralnet,
   emission,
   csm,
   instability,
];

const Projects = () => {
   return <ContentSection styleAdjust={{background: 'var(--main-background)'}} title='Projects' content={projectList}/>
}

export default Projects;