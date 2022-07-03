import { useRef } from 'react';
import useIsVisible from '../../hooks/useisvisible';
import style from './about.module.css';

const IntroContainer = () => {
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   return <div ref={divRef} className={`${style.introContainer} ${isVisible ? style.active : null}`}>
      <h1 style={{fontWeight: '100'}}>Hi, I'm <b style={{fontWeight: '900', fontSize: '40px'}}>Chris</b></h1>
      <p style={{'--delay': '1.5s'}}>I love math and physics.</p>
      <p style={{'--delay': '3.0s'}}>I also love designing awesome stuff,</p>
      <div className={style.test}>
         <p style={{'--delay': '4.5s'}}>like responsive sites,</p>
         <p style={{'--delay': '5.5s'}}>interactive figures,</p>
         <p style={{'--delay': '6.5s'}}>and complex simulations.</p>
      </div>
   </div>;
}

export default IntroContainer;