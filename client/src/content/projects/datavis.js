import ContentPage from '../../components/contentpage';

const datavis = {
   title: 'DataVis',
   making: 'WebGL / GLSL / React / Node / REST',
   image: require('./datavis.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
   pages: [
      <ContentPage>Hello World this is a content page</ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default datavis;