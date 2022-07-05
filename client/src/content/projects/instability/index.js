import ClusterItem from '../../../components/clusteritem';
import ContentPage from '../../../components/contentpage';
import App from './app';
import style from './instability.module.css';

const instability = {
   title: 'Fluid Instabilities',
   components: 'React / WebGL / Fetch API',
   image: require('./instability.png'),
   description: 'Watch a fluid instability evolve in full 3D.',
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <h1 style={{fontWeight: '100'}}>A Rayleigh-Taylor <span style={{fontWeight: '700'}}>Instability</span></h1>
            <p>This animation is <b>interactive</b>. Use your mouse/finger to rotate it. Note this is graphically intense and may have trouble on mobile.</p>
            <App/>
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

const Instability = () => <ClusterItem info={instability}/>;

export default Instability;