import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import style from './csnrs.module.css';

const csnrs = {
   title: <h1 style={{fontWeight: '400', color: 'var(--color-white)'}}>Supernova <span style={{fontWeight: '900'}}>Remnants</span></h1>,
   components: 'FORTRAN / Data-Collection / HPC',
   image: require('./csnrs.png'),
   description: <div style={{color: 'var(--color-white)'}}>What is stellar wind? Learn how and why stars expel matter.</div>,
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