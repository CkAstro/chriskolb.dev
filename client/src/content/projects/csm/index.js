import ContentPage from '../../../components/contentpage';
import ClusterItem from '../../../components/clusteritem';
import CSMApp from './csmapp';
import style from './csm.module.css';

const csm = {
   title: 'Circumstellar Data',
   components: 'HTML5 Canvas / REST / Post-Processing',
   image: require('./test_img.png'),
   description: 'Select from 36 CSM research models and view + export data in detail.',
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <h1 style={{fontWeight: '100'}}>Circumstellar Medium <span style={{fontWeight: '700'}}>Research Data</span></h1>
            <p>View and interact with 36 research datasets. Data displayed is azimuthally-averaged density from the circumstellar medium around a windy binary star system.</p>
            <CSMApp/>
         </div>
      </ContentPage>,

      <ContentPage>
         <div className={style.contentContainer}>
            <div className={style.center}>
               <p>Coming soon...</p>
            </div>
         </div>
      </ContentPage>,
   ],
}

const CSM = () => <ClusterItem info={csm}/>;

export default CSM;