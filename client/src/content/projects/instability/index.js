import ContentPage from '../../../components/contentpage';
import App from './app';

const instability = {
   title: 'Fluid Instabilities',
   making: 'React / WebGL / Fetch API',
   image: require('./instability.png'),
   description: 'Watch a fluid instability evolve in full 3D.',
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default instability;