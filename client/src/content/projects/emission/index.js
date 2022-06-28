import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import App from './app';

const emission = {
   title: 'Supernova Light',
   components: 'WebGL / GLSL / Python / FORTRAN',
   image: require('./emission.png'),
   description: 'Interact with a supernova simulation and see how emission changes with the view.',
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

const Emission = () => <ClusterItem info={emission}/>;

export default Emission;