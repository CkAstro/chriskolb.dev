import ContentPage from '../../components/contentpage';
import FancyButton from '../../components/fancybutton';
import style from './reversi.module.css';

const reversi = {
   title: 'Reversi',
   making: 'React / Express / MongoDB / Websockets',
   image: require('./reversi.png'),
   description: 'Online multi-player board game. Supports multiple games and replays.',
   pages: [
      <ContentPage>
         <div className={style.imageContainer}>
            <img src={require('./reversi.png')}/>
         </div>
         <div className={style.contentContainer}>
            <h1>Reversi</h1>
            <p>Play your friends in this online multi-player board game. Supports multiple games and a replay mode.</p>
            <p>Front end created with React and uses a Websocket to communicate with the server.</p>
            <p>Back end uses Node.js with Express to handle API requests, server/client communication via Websocket, and all game logic.</p>
            <a href='https://reversi.chriskolb.dev'><FancyButton>Play Now</FancyButton></a>
         </div>
      </ContentPage>,
      <ContentPage>Yo dawg it's page 2</ContentPage>,
   ],
}

export default reversi;