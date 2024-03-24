import Footer from '../Footer.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay.jsx'
import ProjectDisplayList from '../ProjectDisplay/ProjectDisplayList.jsx'
import Banner from '../Banner/Banner.jsx'


import styles from "./projectsPage.module.css"

function ProjectsPage() { 
  return(
      <>
        <Banner title="Our Projects" subtitle="See some of our recent achievements." imgSubtitle="We are  proud of having an extensive track record of assisting businesses to constantly improve their tech and keep up with their needs without going over budget. Below are some of the most successful examples of how we strive to make a positive impact.  " rounded={true}/>
        <div className={styles.projectsHolder}>
          <div className={styles.projectsContents}>
              <ProjectDisplayList/>
              
          </div>
          <Footer/>
        </div>
  
        
      </>
    );
  }
  
  export default ProjectsPage