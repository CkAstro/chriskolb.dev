import style from './contentpage.module.css';

const ContentPage = ({ setStyle, children }) => {
   return (
      <div style={setStyle} className={style.contentPage}>
         {children}
      </div>
   );
}

export default ContentPage;