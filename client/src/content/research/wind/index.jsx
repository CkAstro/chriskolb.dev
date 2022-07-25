import { lazy, Suspense } from 'react';
import { ClusterItem, ContentPage } from 'components/containers';

const Page1 = lazy(() => import('./page1'));
const Page2 = lazy(() => import('./page2'));
const Page3 = lazy(() => import('./page3'));

const wind = {
   title: <span style={{fontWeight: '400', color: 'var(--color-white)'}}>Stellar <span style={{fontWeight: '900'}}>Wind</span></span>,
   components: 'Python / Post-Processing / Algorithms',
   image: require('assets/img/wind.webp'),
   description: <span style={{color: 'var(--color-white)'}}>What is stellar wind? Learn how and why stars expel matter.</span>,
   pages: [
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page1/></Suspense>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page2/></Suspense>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page3/></Suspense>
      </ContentPage>,
   ],
}

const Wind = () => <ClusterItem info={wind}/>;

export default Wind;