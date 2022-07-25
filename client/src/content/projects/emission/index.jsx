import { lazy, Suspense } from 'react';
import { ClusterItem, ContentPage } from 'components/containers';

const Page1 = lazy(() => import('./page1'));
const Page2 = lazy(() => import('./page2'));

const emission = {
   title: <span style={{fontWeight: '400'}}>Supernova <span style={{fontWeight: '900'}}>Emission</span></span>,
   components: 'WebGL / GLSL / Python / FORTRAN',
   image: require('assets/img/emission.webp'),
   description: 'Interact with a supernova simulation and see how emission changes with the view.',
   pages: [
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page1/></Suspense>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page2/></Suspense>
      </ContentPage>,
   ],
}

const Emission = () => <ClusterItem info={emission}/>;

export default Emission;