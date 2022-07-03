import ContentPage from '../../../components/contentpage';
import Showcase from '../../../components/showcase';
import App from './app';

const neuralnet = {
   title: <div style={{fontWeight: '100'}}>Behind the scenes of a <span style={{fontWeight: '900'}}>neural network</span></div>,
   components: 'React / HTML5 Canvas / Data Processing / REST',
   image: require('./network.png'),
   description: 'A hand-written number-guessing network. Learn in detail how it works, and help train it.',
   link: null,
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

const NeuralNet = () => <Showcase info={neuralnet}/>;

export default NeuralNet;