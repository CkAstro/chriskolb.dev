import ContentPage from '../../components/contentpage';

const csm = {
   title: 'Circumstellar Data',
   making: 'HTML5 Canvas / REST / Post-Processing',
   image: require('./csm.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
   pages: [
      <ContentPage>Hello World this is a content page</ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default csm;