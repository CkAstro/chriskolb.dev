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

            <p>Play Reversi (aka Othello) online with your friends in this web-app which supports multiple concurrent games, live-game observation, replay mode, and more.</p>
            
            <p>The front-end is created in React and uses a Websocket and RESTful API calls to communicate with the server. The back-end runs on Node.js with Express to handle those API requests and server/client communication. All game logic is done server-side to prevent cheating.</p>

            <a href='https://reversi.chriskolb.dev'><FancyButton>Play Now</FancyButton></a>

            <p>or, continue reading for instructions.</p>
         </div>
      </ContentPage>,

      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Gameplay</h1>

            <p>Reversi is a strategy board game created in the late 1800s which was modified and re-marketed under the name Othello in the 1970s.</p>

            <h2>The first four moves</h2>
            <p>While a game of Othello starts with an initial four pieces placed, Reversi starts with an empty board. However, the first four moves must still be in the center four squares. A coin is flipped to determine which player goes first.</p>

            <h2>Legal Moves</h2>
            <p>After the four initial moves, a legal move is one which flips an opponent's pieces. A piece is flipped if placing the piece surrounds an enemy piece with your colors.</p>

            <h2>Game Over</h2>
            <p>The game ends when neither player has a legal move. This occurs either when the game board has filled up, or no move will flip either player's pieces. The winner is the player with the most pieces once the game has ended.</p>
         </div>
      </ContentPage>,

      <ContentPage>
         <div className={style.contentContainer}>
            <h1>Using the App</h1>
         </div>
      </ContentPage>
   ],
}

export default reversi;