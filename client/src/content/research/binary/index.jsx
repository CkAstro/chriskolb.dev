import { ClusterItem, ContentPage } from 'components/containers';
import style from './binary.module.css';

const binary = {
   title: <span style={{fontWeight: '400', color: 'var(--color-white)'}}><span style={{fontWeight: '900'}}>Binary</span> CSM</span>,
   components: 'FORTRAN / MPI / HPC / Bash',
   image: require('assets/img/binary.webp'),
   description: <span style={{color: 'var(--color-white)'}}>Explore the unique environment around evolved stars before they supernova.</span>,
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <h1 style={{fontWeight: '400'}}>The <span style={{fontWeight: '900'}}>Circumstellar Medium</span> around a Binary</h1>

            <img src={require('assets/img/AFGL.webp')} style={{margin: '0 auto'}}/>
            <img src={require('assets/img/RSculp.webp')} style={{margin: '0 auto'}}/>
         </div>
      </ContentPage>
   ],
}

const Binary = () => <ClusterItem info={binary}/>;

export default Binary;