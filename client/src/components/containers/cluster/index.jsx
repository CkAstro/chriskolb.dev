
import style from './cluster.module.css';

const Cluster = ({ children }) => {

   const buildCluster = () => children.map((item, ind) => {
      return <div key={ind} className={style.clusterItem}>{item}</div>
   });
   return <div className={style.clusterContainer}>
      {/* {buildCluster()} */}
      {children}
   </div>;
}

export default Cluster;