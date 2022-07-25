import { lazy, Suspense } from 'react';
import { ContentPage, Showcase } from 'components/containers';
import { FancyButton, Icons } from 'components/elements';
import style from './reversi.module.css';

// we don't split page1 so there is no wait on a showcase item
const Page2 = lazy(() => import('./page2'));
const Page3 = lazy(() => import('./page3'));

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
         <Suspense fallback={<div>Loading...</div>}><Page2/></Suspense>
      </ContentPage>,
      <ContentPage>
         <Suspense fallback={<div>Loading...</div>}><Page3/></Suspense>
      </ContentPage>
   ],
}

const Reversi = () => <Showcase info={reversi}/>

export default Reversi;