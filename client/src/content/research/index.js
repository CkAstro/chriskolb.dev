import Binary from './binary';
import Wind from './wind';
import CSNRs from './csnrs';
import Cluster from '../../components/cluster';

const Research = () => {
   return <>
      <h1>Astro Research</h1>
      <Cluster>
         <Binary/>
         <Wind/>
         <CSNRs/>
      </Cluster>
   </>;
}

export default Research;