import { useSquares } from 'hooks';
import style from './nucleodisplay.module.css';

const NucleoInfo = () => {
   const { squareSize } = useSquares();
   return (
      <div style={{'--squareSize': `${squareSize ? squareSize.square : 66}px`}}  className={style.learnMore}>
         <a href='https://en.wikipedia.org/wiki/Table_of_nuclides' target='_blank'>
            <div>nuclear isotopes</div>
            <div>&gt; learn more</div>
         </a>
      </div>
   );
}

export default NucleoInfo;