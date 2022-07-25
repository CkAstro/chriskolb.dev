import { lazy, Suspense } from 'react';
import { ClusterItem, ContentPage } from 'components/containers';

const Page1 = lazy(() => import('./page1'));
const Page2 = lazy(() => import('./page2'));

const instability = {
   title: <span style={{fontWeight: '400'}}>Fluid <span style={{fontWeight: '900'}}>Instabilities</span></span>,
   components: 'React / WebGL / Fetch API',
   image: require('assets/img/instability.webp'),
   description: 'Watch a fluid instability evolve in full 3D.',
   pages: [
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page1/></Suspense>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page2/></Suspense>
      </ContentPage>,
   ],
}

const Instability = () => <ClusterItem info={instability}/>;

export default Instability;