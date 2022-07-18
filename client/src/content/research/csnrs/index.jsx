import { ClusterItem, ContentPage } from 'components/containers';
import style from './csnrs.module.css';

const csnrs = {
   title: <span style={{fontWeight: '400', color: 'var(--color-white)'}}>Supernova <span style={{fontWeight: '900'}}>Remnants</span></span>,
   components: 'FORTRAN / Data-Collection / HPC',
   image: require('assets/img/csnrs.webp'),
   description: <span style={{color: 'var(--color-white)'}}>What is stellar wind? Learn how and why stars expel matter.</span>,
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