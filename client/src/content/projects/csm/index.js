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
            <CSMApp/>
         </div>
      </ContentPage>,

      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

const CSM = () => <ClusterItem info={csm}/>;

export default CSM;