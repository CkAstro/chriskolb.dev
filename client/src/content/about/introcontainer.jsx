import { useRef } from 'react';
import { Link } from 'react-scroll';
import { Icons } from 'components/elements';
import { useIsVisible } from 'hooks';
import style from './about.module.css';

const IntroContainer = () => {
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   return <div ref={divRef} style={{color: 'var(--color-black)'}} className={`${style.introContainer} ${isVisible ? style.active : null}`}>
      <h1 style={{fontWeight: '100', color: 'var(--color-primary)'}}>Hi, I'm <b style={{fontWeight: '900', fontSize: '40px'}}>Chris</b></h1>
      <p style={{'--delay': '4.0s'}}>I love math and physics.</p>
      <p style={{'--delay': '5.5s'}}>I also love designing awesome stuff,</p>
      <div className={style.test}>
         <p style={{'--delay': '6.5s'}}>like responsive sites,</p>
         <p style={{'--delay': '7.25s'}}>interactive figures,</p>
         <p style={{'--delay': '8.0s'}}>and complex simulations.</p>
      </div>
      <div style={{'--delay': '9s'}} className={style.linkIcon}>
         <Link smooth spy to='projects' containerId='mainContainer'>
               <Icons.DownArrow fill='black' size='36' setStyle={{cursor: 'pointer'}}/>
         </Link>
      </div>
   </div>;
}

export default IntroContainer;