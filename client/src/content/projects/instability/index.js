import ContentPage from '../../../components/contentpage';
import App from './app';

const instability = {
   title: 'Fluid Instabilities',
   making: 'React / WebGL / Fetch API',
   image: require('./instability.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default instability;