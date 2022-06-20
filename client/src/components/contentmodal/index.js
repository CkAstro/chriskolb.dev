import { useState } from 'react';
import { useDisplay } from '../../contexts/display';
import { useModal } from '../../contexts/modal';
import style from './contentmodal.module.css';

const ContentModal = () => {
   const [ page, setPage ] = useState(0);
   const { modalProps, closeModal } = useModal();
   const { setIsEnabled } = useDisplay();

   const handleClick = event => event.stopPropagation();

   const handleClose = () => {
      closeModal();
      setIsEnabled(true);
   }

   const nextPage = () => {
      const newPage = page+1;
      newPage > modalProps.content.length-1
         ? setPage(0)
         : setPage(newPage)
      ;
   }
   const prevPage = () => {
      const newPage = page-1;
      newPage < 0
         ? setPage(modalProps.content.length-1)
         : setPage(newPage)
      ;
   }

   return (
      <div className={`${style.modalContainer} ${modalProps.isActive ? style.active : null}`} 
         onClick={closeModal}
         onScroll={closeModal}
         onClick={handleClose}
      >
         <div className={style.modal} onClick={handleClick}>
            {modalProps.content && modalProps.content[page] ? modalProps.content[page] : null}
            <div className={style.topBar}>
               <div className={style.closeButton} onClick={handleClose}>&times;</div>
            </div>
            <div className={style.pageNumber}>{`${page+1} / ${modalProps.content ? modalProps.content.length : 1}`}</div>
            <div onClick={nextPage} className={style.nextButton}>&gt;</div>
            <div onClick={prevPage} className={style.prevButton}>&lt;</div>
         </div>
      </div>
   );
}

export default ContentModal;