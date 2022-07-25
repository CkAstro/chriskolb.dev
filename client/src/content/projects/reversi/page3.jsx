import style from './reversi.module.css';

const Page = () => (
   <div className={style.contentContainer}>
      <h1>Using the App</h1>

      <div className={style.contentContainer__flexSection}>
         <div>
            <h2>Selecting a Username</h2>
            <p>Before beginning, you must select a username.</p>
            <p>There is no log-in involved.</p>
         </div>
         <div>
            <img src={require('assets/img/create_username.webp')}/>
         </div>
      </div>

      <div className={style.contentContainer__flexSection}>
         <div>
            <h2>Joining a Game</h2>
            <p>The first section in the game area is the "Join a Game" section. Games waiting on a second player are listed next to the "Start New Game" button.</p>
            <p>To join one of these games, simply click on the other player's name once you have selected a username.</p>
         </div>
         <div>
            <img src={require('assets/img/join_game.webp')}/>
         </div>
      </div>

      <div className={style.contentContainer__flexSection}>
         <div>
            <h2>Starting a New Game</h2>
            <p>If no games are waiting on a player, or you simply wish to start a new game, click on the "Start New Game" button.</p>
            <p>You will be placed in a new game and must wait on an opponent to join. Your game will be visible in the "Join a Game" section for other users (and other browser windows).</p>
         </div>
         <div>
            <img src={require('assets/img/start_game.webp')}/>
         </div>
      </div>

      <div className={style.contentContainer__flexSection}>
         <div>
            <h2>Observing a Live Game</h2>
            <p>If you instead wish to observe a live match, two match types are available under the "Observe Live Games" section.</p>
            <p>Those with <span style={{fontWeight: 'bold', color: 'green'}}>live</span> at the bottom are live matches other players are currently playing. Those with <span style={{fontWeight: 'bold', color: 'red'}}>replay</span> at the bottom are replays of previous games.</p>
            <p>While live matches are not typically available, replays are always running and ready to be observed.</p>
         </div>
         <div>
            <img src={require('assets/img/observe_game.webp')}/>
         </div>
      </div>
   </div>
)

export default Page;