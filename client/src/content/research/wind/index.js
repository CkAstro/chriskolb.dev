import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import style from './wind.module.css';

const wind = {
   title: <span style={{fontWeight: '400', color: 'var(--color-white)'}}>Stellar <span style={{fontWeight: '900'}}>Wind</span></span>,
   components: 'Python / Post-Processing / Algorithms',
   image: require('./wind.png'),
   description: <span style={{color: 'var(--color-white)'}}>What is stellar wind? Learn how and why stars expel matter.</span>,
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <div className={style.center}>
               <p>Coming soon...</p>
            </div>
         </div>
      </ContentPage>
   ],
}

const Wind = () => <ClusterItem info={wind}/>;

export default Wind;