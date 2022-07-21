import { ContentPage, Showcase } from 'components/containers';
import App from './app';
import style from './neuralnet.module.css';

const neuralnet = {
   title: <span style={{fontWeight: '100'}}>Behind the scenes of a <span style={{fontWeight: '900'}}>neural network</span></span>,
   components: 'React / HTML5 Canvas / Data Processing / REST',
   image: require('assets/img/network.webp'),
   description: 'A hand-written number-guessing network. Learn in detail how it works, and help train it.',
   link: null,
   pages: [
      <ContentPage setStyle={{background: '#d5d5d5'}}>
         <div className={style.contentContainer}>
            <h1>Neural Network</h1>
            <p>Begin by writing a number in the left box. An explanation for the plots on the right is coming soon.</p>
            <App/>
         </div>
      </ContentPage>,
   ],
}

const NeuralNet = () => <Showcase info={neuralnet}/>;

export default NeuralNet;