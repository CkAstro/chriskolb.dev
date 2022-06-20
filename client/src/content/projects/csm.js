import ButtonGroup from '../../components/buttongroup';
import ContentPage from '../../components/contentpage';
import style from './csm.module.css';

const csm = {
   title: 'Circumstellar Data',
   making: 'HTML5 Canvas / REST / Post-Processing',
   image: require('./csm.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <div className={style.buttonContainer}>
               <ButtonGroup header={'Mass Ratio'}>{[
                  {text: '1.0', value: '10'},
                  {text: '1.5', value: '15'},
                  {text: '2.0', value: '20'},
                  {text: '2.5', value: '25'},
               ]}</ButtonGroup>
               <ButtonGroup header={'Wind Speed'}>{[
                  {text: '15', value: '15'},
                  {text: '20', value: '20'},
                  {text: '25', value: '25'},
               ]}</ButtonGroup>
               <ButtonGroup header={'Speed Ratio'}>{[
                  {text: '0.75', value: '075'},
                  {text: '1.0', value: '10'},
                  {text: '1.5', value: '15'},
                  {text: '2.0', value: '20'},
               ]}</ButtonGroup>
            </div>
         </div>
      </ContentPage>,

      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default csm;