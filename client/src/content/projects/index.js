import ContentPage from '../../components/contentpage';

const projectList = [
   { 
      title: 'Reversi',
      making: 'React / Express / MongoDB / Websockets',
      image: require('./reversi.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'DataVis',
      making: 'WebGL / GLSL / React / Node / REST',
      image: require('./datavis.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Neural Network',
      making: 'React / HTML5 Canvas / Canvas',
      image: require('./neuralnet.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Supernova Light',
      making: 'WebGL / GLSL / Python / FORTRAN',
      image: require('./emission.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Circumstellar Data',
      making: 'HTML5 Canvas / REST / Post-Processing',
      image: require('./csm.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
   { 
      title: 'Fluid Instabilities',
      making: 'React / WebGL / Fetch API',
      image: require('./instability.png'),
      description: 'Online multi-player board game. Supports multiple games and replays.'
   },
];

const Projects = () => {
   return <ContentPage styleAdjust={{background: '#ddd'}} title='Projects' content={projectList}/>
}

export default Projects;