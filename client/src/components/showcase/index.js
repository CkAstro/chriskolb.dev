import { useModal } from '../../contexts/modal';
import Fancybutton from '../fancybutton';
import style from './showcase.module.css';

const Showcase = ({ info }) => {
   const { setModalContent } = useModal();

   const handleClick = () => setModalContent(info.pages);

   return <div className={style.showcaseContainer}>
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