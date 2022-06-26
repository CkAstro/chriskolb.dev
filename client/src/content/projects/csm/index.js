import ContentPage from '../../../components/contentpage';
import CSMApp from './csmapp';
import style from './csm.module.css';

const csm = {
   title: 'Circumstellar Data',
   making: 'HTML5 Canvas / REST / Post-Processing',
   image: require('./csm.png'),
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

export default csm;