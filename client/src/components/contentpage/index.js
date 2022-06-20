import style from './contentpage.module.css';

const ContentPage = ({ children }) => {
   return (
      <div className={style.contentPage}>
         {children}
      </div>
   );
}

export default ContentPage;