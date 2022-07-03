import Binary from './binary';
import Wind from './wind';
import CSNRs from './csnrs';
import Cluster from '../../components/cluster';
import style from './research.module.css';

const Research = () => {
   return <>
      <div className={style.headerContainer}>
         <h1 className={style.style1}>Astro Research</h1>
      </div>
      <Cluster>
         <Binary/>
         <Wind/>
         <CSNRs/>
      </Cluster>
   </>;
}

export default Research;