import { ClusterItem, ContentPage } from 'components/containers';
import Tex2SVG from 'react-hook-mathjax';
import style from './wind.module.css';

const wind = {
   title: <span style={{fontWeight: '400', color: 'var(--color-white)'}}>Stellar <span style={{fontWeight: '900'}}>Wind</span></span>,
   components: 'Python / Post-Processing / Algorithms',
   image: require('assets/img/wind.webp'),
   description: <span style={{color: 'var(--color-white)'}}>What is stellar wind? Learn how and why stars expel matter.</span>,
   pages: [
      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Stellar Wind</h1>

            <p>All stars shed material in various ways during their lifetimes: explosively, as in nova or supernova outbursts, or continuously, in the form of `stellar wind.' Our sun only loses a few times 10<Tex2SVG display='inline' latex='^{-13}'/> of its mass each year via its `solar wind,' but more massive or more evolved stars can have much higher rates of mass loss. Stellar wind may be produced as radiation from within the star interacts with and ejects mass from its upper atmosphere, or as in the case of the Sun, simply as a hydrodynamical consequence of the star's hot <a href='https://spaceplace.nasa.gov/sun-corona/en/' target='_blank'>corona</a>.</p>

            <img src={require('assets/img/corona.webp')} style={{margin: '0 auto'}}/>
            <div style={{margin: '0 auto 6px auto', textAlign: 'justify', width: '330px'}}>The solar corona captured during the 2017 total eclipse. Credit NASA, Aubrey Gemignani.</div>

            <p>Mass loss through stellar wind can have a significant impact on a star's evolution. The vast majority of stars (those of <a href='https://en.wikipedia.org/wiki/Stellar_mass' target='_blank'>low and intermediate mass</a>) do not produce a stellar wind of any significance until they complete core hydrogen burning and evolve off <a href='https://en.wikipedia.org/wiki/Main_sequence' target='_blank'>main sequence</a>. Massive stars, however, generate enough radiative force that they will lose a significant portion of their mass over their lifespan, with stars above 20 solar masses able to shed a sizable portion of their mass during the main sequence phase.</p>

            <img src={require('assets/img/stellar_wind.webp')} style={{margin: '0 auto'}}/>
            <div style={{margin: '0 auto 6px auto', textAlign: 'justify', width: '330px'}}>A simulated clumpy stellar wind which has been heavily stylized in post-processing.</div>

            <p>The next two pages explain how stellar wind behaves for a lone star, though they are math-heavy.</p>
         </div>
      </ContentPage>,
      <ContentPage>
         <div className={style.contentContainer}>
            <h1>The Math Behind Wind - Isothermal Parker Wind</h1>

            <p>The solar corona is a supersonic wind heated to 10<Tex2SVG display='inline' latex='^6'/> degrees Kelvin which expands out to about twice the Earth-Sun distance in all directions. This constant-temperature (isothermal) wind was first described by Eugene Parker as what is now known as a <a href='http://www.scholarpedia.org/article/Parker_Wind' target='_blank'>Parker wind</a>. The derivation is as follows:</p>

            <p>Conservation of mass tells us</p>

            <Tex2SVG latex='\frac{\partial \rho}{\partial t} + \nabla \cdot(\rho \vec{u}) = 0'/>

            <p>and conservation of momentum is</p>

            <Tex2SVG latex='\frac{\partial}{\partial t}(\rho \vec{u}) + \nabla \cdot (\rho \vec{u}\vec{u}) + \nabla P = \vec{f},'/>

            <p>where <Tex2SVG display='inline' latex='\vec{f}'/> is some external force per unit mass. We will assume the star emits a spherically symmetric wind, so these equations will only depend on radius. If we take this momentum equation and write it in spherical coordinates, it becomes</p>

            <Tex2SVG latex='u\frac{\partial u}{\partial r} + \frac{1}{\rho}\frac{\partial P}{\partial r} = -\frac{GM}{r^2},'/>

            <p>where the last term is the force of gravity acting on the wind. Writing the mass equation in spherical coordinates gives</p>

            <Tex2SVG latex='\frac{1}{r}\frac{\partial}{\partial r}\left(r^2\rho u\right) = 0.'/>

            <p>Here, we can ignore the <Tex2SVG display='inline' latex='1/r'/> term and we see the derivative inside the parenthesis is equal to zero, meaning its integral is a constant. We will choose <Tex2SVG display='inline' latex='\dot{M}'/> for this constant, which is the mass-per-unit time carried by the wind, or the mass-loss rate of the star.</p>

            <Tex2SVG latex='\dot{M} = 4\pi r^2 \rho u'/>

            <p>We may rewrite this in a more useful form for later:</p>
         
            <Tex2SVG latex='\rho(r, u) = \frac{\dot{M}}{4\pi r^2 u}.'/>

            <p>Finally, we can express the pressure in terms of the sound speed, <Tex2SVG display='inline' latex='c_s'/>. The gas is adiabatic, so</p>
            
            <Tex2SVG latex='P = c_s^2 \rho.'/>

            <p>Now, we can work on the <Tex2SVG display='inline' latex='\partial P/\partial r'/> term. As we see above, we do not know pressure in terms of radius, so we must apply the chain rule as follows.</p>

            <Tex2SVG latex='\frac{\partial P}{\partial r} = \frac{\partial P}{\partial \rho}\left[\frac{\partial \rho}{\partial r} + \frac{\partial \rho}{\partial u}\frac{\partial u}{\partial r}\right]'/>

            <p>The first term in the brackets is found using <Tex2SVG display='inline' latex='\rho(r, u)'/>, and is given by</p>

            <Tex2SVG latex='\frac{\partial \rho}{\partial r} = -\frac{2\dot{M}}{4\pi r^3 u} = -\frac{2 \rho}{r},'/>

            <p>where we have replaced the <Tex2SVG display='inline' latex='\dot{M}'/> term with our expression for <Tex2SVG display='inline' latex='\rho'/>. We don't have a solution for <Tex2SVG display='inline' latex='\partial u/\partial r'/> either, but that is actually what we're trying to solve for. The other expression in the second term is</p>

            <Tex2SVG latex='\frac{\partial \rho}{\partial u} = -\frac{\dot{M}}{4\pi r^2 u^2} = -\frac{\rho}{u}.'/>

            <p>For the final term, we use <Tex2SVG display='inline' latex='P = c_s^2\rho'/> to show</p>

            <Tex2SVG latex='\frac{\partial P}{\partial \rho} = c_s^2.'/>

            <p>Combining all these gives</p>

            <Tex2SVG latex='\frac{\partial P}{\partial r} = -c_s^2\left[\frac{2\rho}{r} + \frac{\rho}{u}\right],'/>

            <p>and the full expression is</p>

            <Tex2SVG latex='u\frac{\partial u}{\partial r} - \frac{2c_s^2}{r} - \frac{c_s^2}{u} = -\frac{GM}{r^2}.'/>

            <p>With a little re-aranging, we can show</p>

            <Tex2SVG latex='\frac{1}{u}\frac{\partial u}{\partial r}(u^2 - c_s^2) = \frac{2c_s^2}{r} - \frac{GM}{r^2}.'/>

            <p>This result is known as the Parker wind solution. The first thing we should notice about this is the left-hand side becomes zero when <Tex2SVG display='inline' latex='u = c_s'/>. This is known as a 'critical velocity', where the wind transitions to or from supersonic speed (where it travels faster than it's own speed of sound). When this term is zero, either the right-hand side must be zero or <Tex2SVG display='inline' latex='\partial u/\partial r'/> must be infinite. We can set the right-hand side to zero to show</p>

            <Tex2SVG latex='\frac{2c_s^2}{r} = \frac{GM}{r^2} \to r = \frac{GM}{2c_s^2}.'/>

            <p>This value of <Tex2SVG display='inline' latex='r'/> is a critical radius, and we see the wind cannot transition to supersonic speeds anywhere but this radius. Defining the critical radius as <Tex2SVG display='inline' latex='r_c'/>, the above Parker equation may be integrated to show</p>

            <Tex2SVG latex='\left(\frac{u}{c_s}\right)^2 - \log\left(\frac{u}{c_s}\right)^2 = 4\log\left(\frac{r}{r_c}\right) + 4\frac{r_c}{r} + C,'/>

            <p>where <Tex2SVG display='inline' latex='C'/> is a constant. If we look at the case where <Tex2SVG display='inline' latex='u=c_s'/> and <Tex2SVG display='inline' latex='r=r_c'/>, we see <Tex2SVG display='inline' latex='C = -3'/>.</p>

         </div>
      </ContentPage>,
      <ContentPage>
         <div className={style.contentContainer}>
            <h1>The Math Behind Wind - Adiabatic Wind</h1>

            <h2>What if wind is not isothermal?</h2>

            <p>In this case, we have

            <Tex2SVG latex='P = K \rho^\gamma'/>

            and the temperature <Tex2SVG display='inline' latex='T \propto P/\rho'/> is allowed to vary. The sound speed is then

            <Tex2SVG latex='\frac{\partial P}{\partial \rho} = c_s^2 = \frac{\gamma P}{\rho}'/>

            How does this change our result for <Tex2SVG display='inline' latex='u(r)'/>? It turns out a pressure gradient alone cannot drive an adiabatic wind. We must include an additional term. 

            <Tex2SVG latex='\frac{1}{u}\frac{\partial u}{\partial r}(u^2 - c_s^2) = \frac{2c_s^2}{r} - \frac{GM}{r^2} + f_r(r),'/>

            where we will assume <Tex2SVG display='inline' latex='f_r \propto r^{-2}'/>. This is the same solution we get for Parker wind other than this additional <Tex2SVG display='inline' latex='f_r(r)'/> term and the fact that <Tex2SVG display='inline' latex='c_s^2'/> is no longer constant. But what is this external force term? In most cases, it is radiation pressure acting on the gas through one mechanism or another.</p>

            <h2>Radiation-driven wind</h2>

            <p>Since both gravity and the radiative term are <Tex2SVG display='inline' latex='\propto r^{-2}'/>, we can combine them using a force scalar <Tex2SVG display='inline' latex='\kappa(r)'/> such that</p>

            <Tex2SVG latex='\frac{1}{u}\frac{\partial u}{\partial r}(u^2 - c_s^2) = \frac{2c_s^2}{r} + \kappa(r) \frac{GM}{r^2}.'/>
         </div>
      </ContentPage>,
   ],
}

const Wind = () => <ClusterItem info={wind}/>;

export default Wind;