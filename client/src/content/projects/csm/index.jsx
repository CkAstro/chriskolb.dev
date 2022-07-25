import { lazy, Suspense } from 'react';
import { ClusterItem, ContentPage } from 'components/containers';

const Page1 = lazy(() => import('./page1'));

const csm = {
   title: <span style={{fontWeight: '400'}}><span style={{fontWeight: '900'}}>Circumstellar</span> Data</span>,
   components: 'HTML5 Canvas / REST / Post-Processing',
   image: require('assets/img/csm.webp'),
   description: 'Select from 36 CSM research models and view + export data in detail.',
   pages: [
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page1/></Suspense>
      </ContentPage>,
   ],
}

const CSM = () => <ClusterItem info={csm}/>;

export default CSM;