import { useRef } from 'react';
import { useModal } from 'contexts';
import { FancyButton } from 'components/elements';
import { useIsVisible } from 'hooks';
import style from './showcase.module.css';

const Showcase = ({ info }) => {
   const { setModalContent } = useModal();
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   const handleClick = () => setModalContent(info.pages);

   return (
      <div ref={divRef} className={`${style.showcaseContainer} ${isVisible ? style.active : ''}`}>
         <div className={style.showcaseImageContainer}>
            <img src={info.image}/>
         </div>
         <div className={style.showcaseContent}>
            <h1>{info.title}</h1>
            <h2>{info.components}</h2>
            <p>{info.description}</p>
            <div onClick={handleClick}>
               <FancyButton.Style1>Learn More</FancyButton.Style1>
            </div>
         </div>
      </div>
   );
}

export default Showcase;