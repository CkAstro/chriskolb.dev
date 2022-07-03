import { useRef } from 'react';
import { useModal } from '../../contexts/modal';
import useIsVisible from '../../hooks/useisvisible';
import Fancybutton from '../fancybutton';
import style from './showcase.module.css';

const Showcase = ({ info }) => {
   const { setModalContent } = useModal();
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   const handleClick = () => setModalContent(info.pages);

   return <div ref={divRef} className={`${style.showcaseContainer} ${isVisible ? style.active : null}`}>
      <div className={style.showcaseImageContainer}>
         <img src={info.image}/>
      </div>
      <div className={style.showcaseContent}>
         <h1>{info.title}</h1>
         <h2>{info.components}</h2>
         <p>{info.description}</p>
         <div onClick={handleClick}>
            <Fancybutton.Style1>Learn More</Fancybutton.Style1>
         </div>
      </div>
   </div>;
}

export default Showcase;