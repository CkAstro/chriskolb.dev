import API from '../../../api';
import style from './neuralnet.module.css';

const NetworkOutput = ({ mask, output, handleClear, userResponse }) => {
   const handleClick = ind => API.putNeuralNet({ mask, output, userResponse, guess: ind });

   const buildOutputDisplay = () => output.map((data, ind) => {
      const val = (data.a*100).toFixed();
      const color = !data.a ? 'gray' : val > 85 ? 'green' : val > 0 ? 'orange' : 'red';
      return <div key={ind} onClick={userResponse ? () => handleClick(ind) : null} className={`noselect ${style.outputValue} ${style[color]} ${userResponse ? style.active : null}`}>
         <div className={style.numDisplay}>{ind}</div><div className={color}>{data.a ? `${val}%` : null}</div>
      </div>;
   });

   return <div className={style.outputContainer}>
      <div className={style.clearButton} onClick={handleClear}>clear</div>
      {buildOutputDisplay()}
   </div>;
}

export default NetworkOutput;