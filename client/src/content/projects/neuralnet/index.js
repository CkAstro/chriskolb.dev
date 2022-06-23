import ContentPage from '../../../components/contentpage';
import App from './app';

const neuralnet = {
   title: 'Neural Network',
   making: 'React / HTML5 Canvas / Data Processing',
   image: require('./neuralnet.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default neuralnet;