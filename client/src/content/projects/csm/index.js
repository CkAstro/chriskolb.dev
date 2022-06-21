import ContentPage from '../../../components/contentpage';
import CSMApp from './csmapp';
import style from './csm.module.css';

const csm = {
   title: 'Circumstellar Data',
   making: 'HTML5 Canvas / REST / Post-Processing',
   image: require('./csm.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
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