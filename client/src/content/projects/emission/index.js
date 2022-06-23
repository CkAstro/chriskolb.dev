import ContentPage from '../../../components/contentpage';
import App from './app';

const emission = {
   title: 'Supernova Light',
   making: 'WebGL / GLSL / Python / FORTRAN',
   image: require('./emission.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default emission;