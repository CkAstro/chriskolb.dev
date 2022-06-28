import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import App from './app';

const instability = {
   title: 'Fluid Instabilities',
   components: 'React / WebGL / Fetch API',
   image: require('./instability.png'),
   description: 'Watch a fluid instability evolve in full 3D.',
   pages: [
      <ContentPage><App/></ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

const Instability = () => <ClusterItem info={instability}/>;

export default Instability;