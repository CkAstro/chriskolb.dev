import style from './nucleodisplay.module.css';

const NucleoInfo = ({ setStyle }) => {
   return <div style={setStyle} className={style.learnMore}>
      <p>nuclear isotopes</p>
      <p>learn more</p>
   </div>;
}

export default NucleoInfo;