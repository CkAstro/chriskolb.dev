import { useRef, memo } from 'react';
import useIsVisible from '../../hooks/useisvisible';
import { SketchCard, SketchItem } from '../../components/sketchcard';
import style from './about.module.css';
// idea: loop a bunch of super easy equations
//    and then one really complex one

// 2 + 2 = 4
// 1 / 0 = ??
// sum(n) = -1/12
// 20 < 10 < 15
// y = mx + b
// 'math'
// 2x = 1
// sqrt(i^2) = \pm i
// gauge invariance (11/19 notes)
// a + b
// 5 + 3 * 0 = 5 ?
// "a b c triangle"
// 'my' wind equation

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

const About = () => {
   return <div className={style.aboutContainer}>
      <IntroContainer/>

      <div className={style.flexColumns}>
         <SketchCard>
            <h1>Languages</h1>
            <SketchItem percent='90'>Javascript</SketchItem>
            <SketchItem percent='90'>HTML5 / CSS3 / SVG</SketchItem>
            <SketchItem percent='80'>Python</SketchItem>
            <SketchItem percent='80'>OpenGL / WebGL / GLSL</SketchItem>
            <SketchItem percent='75'>FORTRAN</SketchItem>
            <SketchItem percent='75'>Bash</SketchItem>
            <SketchItem percent='75'>LaTeX</SketchItem>
            <SketchItem percent='50'>C / C++</SketchItem>
            <SketchItem percent='50'>PHP</SketchItem>
            <SketchItem percent='25'>Java</SketchItem>
         </SketchCard>
         <Card>
            <h1>Frameworks <span style={{fontWeight: '100'}}>&</span> APIs</h1>
            <CardItem percent='90'>React</CardItem>
            <CardItem percent='90'>NodeJS / Express</CardItem>
            <CardItem percent='90'>RESTful</CardItem>
            <CardItem percent='90'>OpenMP / MPI</CardItem>
            <CardItem percent='50'>Redux</CardItem>
            <CardItem percent='50'>OpenACC</CardItem>
         </Card>
         <Card>
            <h1>Tools <span style={{fontWeight: '100'}}>&</span> Software</h1>
            <CardItem percent='95'>NumPy / SciPy</CardItem>
            <CardItem percent='90'>UNIX / Linux / Windows</CardItem>
            <CardItem percent='90'>Microsoft Office Suite</CardItem>
            <CardItem percent='80'>GiT</CardItem>
            <CardItem percent='75'>PANDAS</CardItem>
            <CardItem percent='75'>GIMP / Photoshop</CardItem>
            <CardItem percent='50'>Blender</CardItem>
         </Card>
      </div>
   </div>;
}

const Card = ({ children }) => {
   const divRef = useRef(null);
   const isVisible = useIsVisible(divRef, true);

   return <div ref={divRef} className={`${style.card} ${isVisible ? style.active : null}`}>
      <div className={style.cardAccent}/>
      {children}
   </div>
};

const CardItem = ({ percent, children }) => {
   return <div className={style.cardItem}>
      <div>{children}</div>
      <div style={{'--width': `${percent}%`}} className={style.percentContainer}/>
      <div className={style.percentContainer2}/>
   </div>;
}

export default memo(About);