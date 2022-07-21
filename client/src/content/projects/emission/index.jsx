import { ClusterItem, ContentPage } from 'components/containers';
import Tex2SVG from 'react-hook-mathjax';
import App from './app';
import style from './emission.module.css';

const emission = {
   title: <span style={{fontWeight: '400'}}>Supernova <span style={{fontWeight: '900'}}>Emission</span></span>,
   components: 'WebGL / GLSL / Python / FORTRAN',
   image: require('assets/img/emission.webp'),
   description: 'Interact with a supernova simulation and see how emission changes with the view.',
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <h1 style={{fontWeight: '100'}}>Supernova <span style={{fontWeight: '700'}}>Emission</span></h1>
            <p>This animation is <b>interactive</b>. Use your mouse/finger to rotate it. Note this is graphically intense and may have trouble on mobile and older PCs. Use the <b>slider</b> and <b>button</b> below to change the frequency <Tex2SVG display='inline' latex='\nu'/> of light and to toggle the circumstellar medium. More information available on the next page!</p>
            <App/>
         </div>
      </ContentPage>,
      <ContentPage>
         <div className={style.contentContainer}>
            <h1>About the Figure</h1>

            <p>The simulation is run assuming two stars are orbiting each other prior to one going supernova. Before the explosion, the start begins ejecting its mass in a dense wind, which creates a disk about the equatorial plane. This environment is called a circumstellar medium (CSM).</p>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>The CSM</h2>
                  <p>To the right is a simplified picture. The progenitor star (the one about to supernova) ejects mass at a high rate and creates a dense disk.</p>
                  <p>This disk will eventually both prevent the supernova blastwave from expanding and prevent light from reaching the camera.</p>
               </div>
               <div>
                  {/* these images are manually sized as compressing smaller image makes filesize larger... */}
                  <img src={require('assets/img/emission_csm.webp')} width='350px'/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <img src={require('assets/img/emission_nova.webp')} width='350px'/>
               </div>
               <div style={{maxWidth: '500px'}}>
                  <h2>The Supernova</h2>
                  <p></p>
                  <p></p>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Synchrotron Emission</h2>
                  <p></p>
                  <p></p>
               </div>
               <div>
                  <img src={require('assets/img/emission_light.webp')} width='350px'/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <h2>Observing the Light</h2>
                  <p></p>
                  <p></p>
               </div>
               <div>
                  <img src={require('assets/img/emission_obs1.webp')} width='350px'/>
               </div>
            </div>

            <div className={style.contentContainer__flexSection}>
               <div>
                  <img src={require('assets/img/emission_obs2.webp')} width='350px'/>
               </div>
               <div style={{maxWidth: '500px'}}>
                  <h2>A Different Orientation</h2>
                  <p></p>
                  <p></p>
               </div>
            </div>

         
         </div>
      </ContentPage>,
   ],
}

const Emission = () => <ClusterItem info={emission}/>;

export default Emission;