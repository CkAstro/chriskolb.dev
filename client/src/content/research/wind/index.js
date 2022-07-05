import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import style from './wind.module.css';

const wind = {
   title: 'Stellar Wind',
   components: 'Python / Post-Processing / Algorithms',
   image: require('./TychoP_thumb.png'),
   description: 'What is stellar wind? Learn how and why stars expel matter.',
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