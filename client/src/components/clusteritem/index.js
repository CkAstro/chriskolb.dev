import { useState } from 'react';
import { useModal } from '../../contexts/modal';
import FancyButton from '../fancybutton';
import style from './clusteritem.module.css';

const ClusterItem = ({ info }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   const { setModalContent } = useModal();

   const handleClick = () => {
      setModalContent(info.pages);
   }

   return <div className={style.clusterItemContainer}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
   >
      <div className={`${style.clusterItemContent} ${isMouseOver ? style.mouseOver : null}`}>
         <img src={info.image}/>
         <div className={style.topContent}>
            <h1>{info.title}</h1>
            <h2>{info.components}</h2>
         </div>
         <div className={style.bottomContent}>
            <p>{info.description}</p>
            <div onClick={handleClick}>
               <FancyButton.Style1>Learn More</FancyButton.Style1>
            </div>
         </div>
      </div>
   </div>;
}

export default ClusterItem;