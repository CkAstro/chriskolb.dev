import ContentPage from '../../../components/contentpage';
import App from './app';

const emission = {
   title: 'Supernova Light',
   making: 'WebGL / GLSL / Python / FORTRAN',
   image: require('./emission.png'),
   description: 'Interact with a supernova simulation and see how emission changes with the view.',
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default emission;