import { memo } from 'react';
import { SketchCard, SketchItem } from '../../components/sketchcard';
import IntroContainer from './introcontainer';
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
         <SketchCard cardDelay='0.25s'>
            <h1>Frameworks <span style={{fontWeight: '100'}}>&</span> APIs</h1>
            <SketchItem percent='90'>React</SketchItem>
            <SketchItem percent='90'>NodeJS / Express</SketchItem>
            <SketchItem percent='90'>RESTful</SketchItem>
            <SketchItem percent='90'>OpenMP / MPI</SketchItem>
            <SketchItem percent='50'>Redux</SketchItem>
            <SketchItem percent='50'>OpenACC</SketchItem>
         </SketchCard>
         <SketchCard cardDelay='0.5s'>
            <h1>Tools <span style={{fontWeight: '100'}}>&</span> Software</h1>
            <SketchItem percent='95'>NumPy / SciPy</SketchItem>
            <SketchItem percent='90'>UNIX / Linux / Windows</SketchItem>
            <SketchItem percent='90'>Microsoft Office Suite</SketchItem>
            <SketchItem percent='80'>GiT</SketchItem>
            <SketchItem percent='75'>PANDAS</SketchItem>
            <SketchItem percent='75'>GIMP / Photoshop</SketchItem>
            <SketchItem percent='50'>Blender</SketchItem>
         </SketchCard>
      </div>

      <div style={{marginTop: '200px'}} className={style.flexColumns}>
         <SketchCard>
            <h1>Languages</h1>
            <SketchItem percent='90' itemDelay='0.05s'>Javascript</SketchItem>
            <SketchItem percent='90' itemDelay='0.10s'>HTML5 / CSS3 / SVG</SketchItem>
            <SketchItem percent='80' itemDelay='0.15s'>Python</SketchItem>
            <SketchItem percent='80' itemDelay='0.20s'>OpenGL / WebGL / GLSL</SketchItem>
            <SketchItem percent='75' itemDelay='0.25s'>FORTRAN</SketchItem>
            <SketchItem percent='75' itemDelay='0.30s'>Bash</SketchItem>
            <SketchItem percent='75' itemDelay='0.35s'>LaTeX</SketchItem>
            <SketchItem percent='50' itemDelay='0.40s'>C / C++</SketchItem>
            <SketchItem percent='50' itemDelay='0.45s'>PHP</SketchItem>
            <SketchItem percent='25' itemDelay='0.50s'>Java</SketchItem>
         </SketchCard>
         <SketchCard cardDelay='0.25s'>
            <h1>Frameworks <span style={{fontWeight: '100'}}>&</span> APIs</h1>
            <SketchItem percent='90' itemDelay='0.05s'>React</SketchItem>
            <SketchItem percent='90' itemDelay='0.10s'>NodeJS / Express</SketchItem>
            <SketchItem percent='90' itemDelay='0.15s'>RESTful</SketchItem>
            <SketchItem percent='90' itemDelay='0.20s'>OpenMP / MPI</SketchItem>
            <SketchItem percent='50' itemDelay='0.25s'>Redux</SketchItem>
            <SketchItem percent='50' itemDelay='0.30s'>OpenACC</SketchItem>
         </SketchCard>
         <SketchCard cardDelay='0.5s'>
            <h1>Tools <span style={{fontWeight: '100'}}>&</span> Software</h1>
            <SketchItem percent='95' itemDelay='0.05s'>NumPy / SciPy</SketchItem>
            <SketchItem percent='90' itemDelay='0.10s'>UNIX / Linux / Windows</SketchItem>
            <SketchItem percent='90' itemDelay='0.15s'>Microsoft Office Suite</SketchItem>
            <SketchItem percent='80' itemDelay='0.20s'>GiT</SketchItem>
            <SketchItem percent='75' itemDelay='0.25s'>PANDAS</SketchItem>
            <SketchItem percent='75' itemDelay='0.30s'>GIMP / Photoshop</SketchItem>
            <SketchItem percent='50' itemDelay='0.35s'>Blender</SketchItem>
         </SketchCard>
      </div>
   </div>;
}

export default memo(About);