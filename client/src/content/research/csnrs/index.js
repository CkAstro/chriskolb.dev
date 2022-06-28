import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import style from './csnrs.module.css';

const csnrs = {
   title: 'Supernova Remnants',
   components: 'FORTRAN / Data-Collection / HPC',
   image: require('./csnrs.png'),
   description: 'What is stellar wind? Learn how and why stars expel matter.',
   pages: [
      <ContentPage>
      <div className={style.contentContainer}>
         <div className={style.center}>
            <p>Coming soon...</p>
         </div>
      </div>
      </ContentPage>
   ],
}

const CSNRs = () => <ClusterItem info={csnrs}/>;

export default CSNRs;