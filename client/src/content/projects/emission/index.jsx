import { ClusterItem, ContentPage } from 'components/containers';
import App from './app';
import style from './emission.module.css';

const emission = {
   title: <span style={{fontWeight: '400'}}>Supernova <span style={{fontWeight: '900'}}>Emission</span></span>,
   components: 'WebGL / GLSL / Python / FORTRAN',
   image: require('./emission.png'),
   description: 'Interact with a supernova simulation and see how emission changes with the view.',
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <h1 style={{fontWeight: '100'}}>Supernova <span style={{fontWeight: '700'}}>Emission</span></h1>
            <p>This animation is <b>interactive</b>. Use your mouse/finger to rotate it. Note this is graphically intense and may have trouble on mobile and older PCs.</p>
            <App/>
            <p>Use the above slider to alter light frequency and toggle the CSM. CSM 'off' is the true light while 'on' demonstrates what is blocking the emission.</p>
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

const Emission = () => <ClusterItem info={emission}/>;

export default Emission;