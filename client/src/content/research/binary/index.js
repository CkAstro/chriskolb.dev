import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import style from './binary.module.css';

const binary = {
   title: 'Binary CSM',
   components: 'FORTRAN / MPI / HPC / Bash',
   image: require('./binary_thumb.png'),
   description: 'Explore the unique environment around evolved stars before they supernova.',
   pages: [
      <ContentPage>
         <p>page 1</p>
      </ContentPage>
   ],
}

const Binary = () => <ClusterItem info={binary}/>;

export default Binary;