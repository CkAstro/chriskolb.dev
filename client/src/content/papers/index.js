import ContentSection from '../../components/contentsection';

const projectList = [
];

const Papers = () => {
   return <ContentSection 
      title='Papers' 
      navId='papers'
      content={projectList}
      styleAdjust={{background: 'var(--main-background)'}} 
   />
}

export default Papers;