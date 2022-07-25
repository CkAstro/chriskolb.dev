import { lazy, Suspense } from 'react';
import { ContentPage, Showcase } from 'components/containers';
import { FancyButton, Icons, PageLoading } from 'components/elements';
import style from './datavis.module.css';

// we don't split page1 so there is no wait on a showcase item
const Page2 = lazy(() => import('./page2'));
const Page3 = lazy(() => import('./page3'));
const Page4 = lazy(() => import('./page4'));

const datavis = {
   title: <span style={{fontWeight: '100'}}>use <span style={{fontWeight: '900'}}>DataVis</span> to view data anywhere</span>,
   components: 'WebGL / GLSL / React / Node / REST',
   image: require('assets/img/datavis_display.webp'),
   description: 'Upload and view volumetric scalar data.',
   link: 'https://datavis.chriskolb.dev',
   pages: [
      <ContentPage>
         <div className={style.imageContainer}>
            <img src={require('assets/img/datavis.webp')}/>
         </div>
         <div className={`${style.contentContainer}`}>
            <h1><a href='https://github.com/CkAstro/datavis' target='_blank' title='View project on GitHub'><Icons.GitHub fill='black' size={24}/></a> DataVis</h1>

            <p>View volumetric scalar data from your browser. This web-app allows the user to upload and view their own research data with support for multiple formats and resolutions.</p>

            <p>The front-end is created in React and uses a custom WebGL/GLSL implementation to quickly render volumetric data mapped to planar and spherical shapes, or shown as an iso-surface (a surface of constant value). The back-end runs on Node.js with Express and will process incomming datasets to add an easily-renderable data format to the API response.</p>

            <a href='https://datavis.chriskolb.dev' target='_blank'>
               <FancyButton.Style2>View App</FancyButton.Style2>
            </a>
         </div>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<PageLoading/>}><Page2/></Suspense>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<PageLoading/>}><Page3/></Suspense>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<PageLoading/>}><Page4/></Suspense>
      </ContentPage>
   ],
}

const DataVis = () => <Showcase info={datavis}/>;

export default DataVis;