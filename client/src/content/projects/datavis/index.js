import ContentPage from '../../../components/contentpage';
import FancyButton from '../../../components/fancybutton';
import Showcase from '../../../components/showcase';
import style from './datavis.module.css';

const datavis = {
   title: 'DataVis',
   components: 'WebGL / GLSL / React / Node / REST',
   image: require('./datavis_display.png'),
   description: 'Full-stack app which allows you to upload and view volumetric scalar data.',
   link: 'https://datavis.chriskolb.dev',
   pages: [
      <ContentPage>
         <div className={style.imageContainer}>
            <img src={require('./datavis.png')}/>
         </div>
         <div className={`${style.contentContainer}`}>
            <h1>DataVis</h1>

            <p>View volumetric scalar data from your browser. This web-app allows the user to upload and view their own research data with support for multiple formats and resolutions.</p>

            <p>The front-end is created in React and uses a custom WebGL/GLSL implementation to quickly render volumetric data mapped to planar and spherical shapes, or shown as an iso-surface (a surface of constant value). The back-end runs on Node.js with Express and will process incomming datasets to add an easily-renderable data format to the API response.</p>

            <a href='https://datavis.chriskolb.dev'><FancyButton.Style2>View App</FancyButton.Style2></a>
         </div>
      </ContentPage>,

      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Using the App</h1>

            <p>Coming soon.</p>
         </div>
      </ContentPage>,
   ],
}

const DataVis = () => <Showcase info={datavis}/>;

export default DataVis;