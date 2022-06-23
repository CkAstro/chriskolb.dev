
import { InteractiveCanvas } from '../../../components/canvas';
import style from './neuralnet.module.css';

const NetworkInput = ({ onInteract, draw, inputData, outputData, handleClear }) => {

   return <div>
      <InteractiveCanvas
         draw={draw}
         onInteract={onInteract}
         data={inputData}
         setStyle={{width: '112px', height: '112px'}}
      />
      <InteractiveCanvas
         draw={draw}
         onInteract={() => null}
         data={outputData}
         setStyle={{width: '112px', height: '112px', marginLeft: '10px'}}
      />
      <div onClick={handleClear}>clear</div>
   </div>;
}

export default NetworkInput;