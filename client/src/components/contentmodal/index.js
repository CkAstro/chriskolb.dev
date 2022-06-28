import { useModal } from '../../contexts/modal';
import style from './contentmodal.module.css';

const ContentModal = () => {
   const { modalProps, toNextPage, toPrevPage, closeModal } = useModal();

   const handleClick = event => event.stopPropagation();

   const handleClose = () => closeModal();

   return (
      <div className={`${style.modalContainer} ${modalProps.isActive ? style.active : null}`} 
         // onWheel={handleScroll}
         onClick={handleClose}
      >
         <div className={style.modal} onClick={handleClick}>
            <div className={style.modalContent}>
               {modalProps.content && modalProps.content[modalProps.page] 
                     ? modalProps.content[modalProps.page] 
                     : null}
            </div>
            <div className={style.topBar}>
               <div className={style.closeButton} onClick={handleClose}>&times;</div>
            </div>
            <div className={style.pageNumber}>{`${modalProps.page+1} / ${modalProps.content ? modalProps.content.length : 1}`}</div>
            <div onClick={toNextPage} className={style.nextButton}>&#x27A4;</div>
            <div onClick={toPrevPage} className={style.prevButton}>&#x27A4;</div>
         </div>
      </div>
   );
}

export default ContentModal;