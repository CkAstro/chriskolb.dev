import Binary from './binary';
import Wind from './wind';
import CSNRs from './csnrs';
import Cluster from '../../components/cluster';
import style from './research.module.css';

const Research = () => {
   return <>
      <div className={style.headerContainer}>
         <h1 style={{color: 'var(--color-white)'}} className={style.style1}>Astrophysics <span style={{fontWeight: '900'}}>Research</span></h1>
      </div>
      <Cluster>
         <Wind/>
         <Binary/>
         <CSNRs/>
      </Cluster>
   </>;
}

export default Research;