import style from './header.module.css';

const Header = () => {
   return (
      <div className={style.header}>
         <div className='contentContainer'>
            <h1>Christopher Kolb</h1>
            <h2>Computational Astrophysics + Full Stack Development</h2>
         </div>
      </div>
   );
}

export default Header;