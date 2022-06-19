import { useDisplay } from '../../contexts/display';
import { useModal } from '../../contexts/modal';
import style from './contentmodal.module.css';

const ContentModal = () => {
   const { modalProps, closeModal } = useModal();
   const { setIsEnabled } = useDisplay();

   const handleClick = event => event.stopPropagation();

   const handleClose = () => {
      closeModal();
      setIsEnabled(true);
   }

   return (
      <div className={`${style.modalContainer} ${modalProps.isActive ? style.active : null}`} 
         onClick={closeModal}
         onScroll={closeModal}
         onClick={handleClose}
      >
         <div className={style.modal} onClick={handleClick}>
            {modalProps.content}
            <div className={style.topBar}>
               <div className={style.closeButton} onClick={handleClose}>&times;</div>
            </div>
            <div className={style.nextButton}>&gt;</div>
            <div className={style.prevButton}>&lt;</div>
         </div>
      </div>
   );
}

export default ContentModal;