import { useState, useEffect } from 'react';
import { useModal, useDisplay } from 'contexts';
import { FancyButton } from 'components/elements';
import style from './clusteritem.module.css';

const ClusterItem = ({ info }) => {
   const [ isMouseOver, setIsMouseOver ] = useState(false);
   const { isEnabled, enableItem } = useDisplay();
   const { setModalContent } = useModal();
   const [ isDragged, setIsDragged ] = useState(false);

   useEffect(() => {
      if (isEnabled !== info.title) return setIsMouseOver(false);
      setIsMouseOver(true);
   }, [isEnabled]);

   const handleTouchMove = event => {
      setIsDragged(true);
   }

   const handleTouchEnd = event => {
      if (isDragged) return setIsDragged(false);
      if (isEnabled === info.title) {
         enableItem(null);
      } else {
         enableItem(info.title);
      }
   }

   const handleClick = event => {
      event.stopPropagation();
      setModalContent(info.pages);
   }

   return (
      <div className={`noselect ${style.clusterItemContainer}`}
         onMouseEnter={() => setIsMouseOver(true)}
         onMouseLeave={() => setIsMouseOver(false)}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
      >
         <div className={`${style.clusterItemContent} ${isMouseOver ? style.mouseOver : ''}`}>
            <img src={info.image} alt={info.description}/>
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
      </div>
   );
}

export default ClusterItem;