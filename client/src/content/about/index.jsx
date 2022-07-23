import { memo } from 'react';
import { SketchCard, SketchItem } from 'components/elements';
import IntroContainer from './introcontainer';
import { LaTeX } from 'assets/latex';
import style from './about.module.css';

const About = () => {
   return <div className={style.aboutContainer}>
      <IntroContainer/>

      <div className={style.flexColumns}>
         <SketchCard>
            <h1>Languages</h1>
            <SketchItem percent='90' itemDelay='0.05s'>Javascript</SketchItem>
            <SketchItem percent='90' itemDelay='0.10s'>HTML5 / CSS3 / SVG</SketchItem>
            <SketchItem percent='80' itemDelay='0.15s'>Python</SketchItem>
            <SketchItem percent='80' itemDelay='0.20s'>OpenGL / WebGL / GLSL</SketchItem>
            <SketchItem percent='75' itemDelay='0.25s'>FORTRAN</SketchItem>
            <SketchItem percent='75' itemDelay='0.30s'>Bash</SketchItem>
            <SketchItem percent='75' itemDelay='0.35s'><LaTeX/><span style={{opacity: '0'}}>LaTeX</span></SketchItem>
            <SketchItem percent='50' itemDelay='0.40s'>C / C++</SketchItem>
            <SketchItem percent='50' itemDelay='0.45s'>PHP</SketchItem>
            <SketchItem percent='35' itemDelay='0.45s'>Typescript</SketchItem>
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