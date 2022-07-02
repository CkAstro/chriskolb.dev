import style from './nucleodisplay.module.css';

const NucleoInfo = ({ setStyle }) => {
   return <div style={setStyle}  className={style.learnMore}>
      <a href='https://en.wikipedia.org/wiki/Table_of_nuclides' target='_blank'>
         <p>nuclear isotopes</p>
         <p>&gt; learn more</p>
      </a>
   </div>;
}

export default NucleoInfo;