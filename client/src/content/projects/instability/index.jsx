import { ClusterItem, ContentPage } from 'components/containers';
import App from './app';
import style from './instability.module.css';

const instability = {
   title: <span style={{fontWeight: '400'}}>Fluid <span style={{fontWeight: '900'}}>Instabilities</span></span>,
   components: 'React / WebGL / Fetch API',
   image: require('assets/img/instability.webp'),
   description: 'Watch a fluid instability evolve in full 3D.',
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <h1 style={{fontWeight: '100'}}>A Rayleigh-Taylor <span style={{fontWeight: '700'}}>Instability</span></h1>
            <p>This animation is <b>interactive</b>. Use your mouse/finger to rotate it. Note this is graphically intense and may have trouble on mobile. Head to the next page to learn how this instability forms.</p>
            <App/>
         </div>
      </ContentPage>,
      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Fluid Instabilities</h1>

            <p>In fluid dynamics, an instability occurs when the interface between two fluids is disrupted while the fluids are under acceleration or shear.</p>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>The Rayleigh-Taylor Instability</h2>
                  <p>Occurs when a <b>less</b>-dense fluid is accelerated into a <b>more</b>-dense fluid.</p>
                  <p>Here on earth, this is easily visible when water (more-dense) is placed over oil (less-dense). Gravity creates a buoyancy force which pushes the oil upward into the water, causing the two to mix.</p>
                  <p>This process is visible in 2D on the right, or in 3D on the previous page. Pause, rotate, and zoom the figure to really explore the differences.</p>
               </div>
               <div>
                  <img src={require('assets/img/rt_instability.webp')}/>
                  <div style={{textAlign: 'center'}}>Credit Shengtai Li, Hui Li, <a href='https://lanl.gov/' target='_blank'>LANL</a>, modified.</div>
               </div>
            </div>
         </div>
      </ContentPage>,
   ],
}

const Instability = () => <ClusterItem info={instability}/>;

export default Instability;