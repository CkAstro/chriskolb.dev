import { useState, useContext, createContext } from 'react';

const defaultProps = {
   content: null,
   isActive: false,
   page: 0,
}

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
   const [ modalProps, setModalProps ] = useState(defaultProps);

   return (
      <ModalContext.Provider value={[modalProps, setModalProps]}>
         {children}
      </ModalContext.Provider>
   );
}

const useModal = () => {
   const [ modalProps, setModalProps ] = useContext(ModalContext);

   const setModalContent = content => {
      const updatedProps = {
         content: content,
         isActive: true,
         page: 0,
      }
      setModalProps(updatedProps);
   }

   const toNextPage = () => {
      const updatedProps = { ...modalProps }
      const newPage = modalProps.page+1;
      updatedProps.page = newPage > modalProps.content.length-1 ? 0 : newPage;
      setModalProps(updatedProps);
   }

   const toPrevPage = () => {
      const updatedProps = { ...modalProps }
      const newPage = modalProps.page-1;
      updatedProps.page = newPage < 0 ? modalProps.content.length-1 : newPage;
      setModalProps(updatedProps);
   }

   const closeModal = () => {
      const updatedProps = {
         content: modalProps.content,
         isActive: false,
      }
      setModalProps(updatedProps);
   }

   return {
      modalProps,
      setModalContent,
      toNextPage,
      toPrevPage,
      closeModal,
   }
}

export { ModalProvider, useModal };