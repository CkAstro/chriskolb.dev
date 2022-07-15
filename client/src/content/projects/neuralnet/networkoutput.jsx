import { memo } from 'react';
import style from './neuralnet.module.css';

const OutputDisplay = memo(({ output, handleSubmit, userResponse }) => output.map((data, ind) => {
   const val = (data.a*100).toFixed();
   const color = !data.a ? 'gray' : val > 85 ? 'green' : val > 0 ? 'orange' : 'red';
   return (
      <div key={ind} 
         onClick={userResponse && userResponse !== 'submit' ? () => handleSubmit(ind) : null} 
         className={`noselect ${style.outputValue} ${style[color]} ${userResponse && userResponse !== 'submit' ? style.active : ''}`}
      >
         <div className={style.numDisplay}>{ind}</div><div className={color}>{data.a ? `${val}%` : null}</div>
      </div>
   );
}));

const NetworkOutput = ({ output, handleClear, handleSubmit, userResponse }) => (
   <div className={style.outputContainer}>
      <div className={style.clearButton} onClick={handleClear}>clear</div>
      <OutputDisplay output={output} handleSubmit={handleSubmit} userResponse={userResponse}/>
   </div>
);

export default NetworkOutput;