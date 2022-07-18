import { ContentPage, Showcase } from 'components/containers';
import { FancyButton, Icons } from 'components/elements';
import style from './reversi.module.css';

const reversi = {
   title: <span style={{fontWeight: '100'}}>Multiplayer <span style={{fontWeight: '700'}}>Reversi</span></span>,
   components: 'React / Node / MongoDB / Websockets',
   image: require('assets/img/reversi_tablet.webp'),
   description: 'Online multi-player board game. Supports multiple games, observer mode, and replays.',
   link: 'https://reversi.chriskolb.dev',
   pages: [
      <ContentPage>
         <div className={style.imageContainer}>
            <img src={require('assets/img/reversi.webp')}/>
         </div>
         <div className={style.contentContainer}>
            <h1 style={{fontWeight: '100'}}><a href='https://github.com/CkAstro/reversi' target='_blank' title='View on GitHub'><Icons.GitHub fill='black' size={24}/></a> Multiplayer <span style={{fontWeight: '700'}}>Reversi</span></h1>

            <p>Play Reversi (aka Othello) online with your friends in this web-app which supports multiple concurrent games, live-game observation, replay mode, and more.</p>
            
            <p>The front-end is created in React and uses a Websocket and RESTful API calls to communicate with the server. The back-end runs on Node.js with Express to handle those API requests and server/client communication. All game logic is done server-side to prevent cheating.</p>

            <p>Continue reading for instructions.</p>

            <a href='https://reversi.chriskolb.dev' target='_blank'>
               <FancyButton.Style2>Play Now</FancyButton.Style2>
            </a>
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

const Reversi = () => <Showcase info={reversi}/>

export default Reversi;