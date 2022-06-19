import { useModal } from '../../contexts/modal';
import style from './contentmodal.module.css';

const ContentModal = () => {
   const { modalProps, closeModal } = useModal();

   return (
      <div className={`${style.modalContainer} ${modalProps.isActive ? style.active : null}`} 
         onClick={closeModal}
         onScroll={closeModal}
      >
         <div className={style.modal}>
            {modalProps.modalContent}
            <div className={style.topBar}>
               <div className={style.closeButton}>&times;</div>
            </div>
         </div>
      </div>
   );
}

export default ContentModal;