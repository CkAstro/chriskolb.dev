import style from './cluster.module.css';

const Cluster = ({ children }) => (
   <div className={style.clusterContainer}>
      {children}
   </div>
);

export default Cluster;