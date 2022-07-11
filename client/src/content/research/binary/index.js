import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import style from './binary.module.css';

const binary = {
   title: <span style={{fontWeight: '400', color: 'var(--color-white)'}}><span style={{fontWeight: '900'}}>Binary</span> CSM</span>,
   components: 'FORTRAN / MPI / HPC / Bash',
   image: require('./binary_thumb.png'),
   description: <span style={{color: 'var(--color-white)'}}>Explore the unique environment around evolved stars before they supernova.</span>,
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

const Binary = () => <ClusterItem info={binary}/>;

export default Binary;