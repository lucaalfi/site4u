import Footer from '../Footer.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay.jsx'
import Banner from '../Banner/Banner.jsx'


import styles from "./projectsPage.module.css"

function ProjectsPage() {
    const projects = [];
    for (let i = 0; i < 12; i++) {
        projects.push(
        <ProjectDisplay name={"Lorem Ipsum"+i}
        imageSrc="https://placehold.co/1920x1080"
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nunc nisl, sit amet vestibulum odio molestie non. Quisque eu egestas erat. Aliquam et ligula id nisi fringilla finibus vel nec risus. Suspendisse non ipsum tortor. Vestibulum iaculis eget sem quis convallis."+i}
        projectLink="https://placehold.co/1920x1080"
        key={"projDisp"+i}
        />);
    }
   
   
   
    return(
      <>
        <Banner title="Our Projects" subtitle="See some of our recent achievements." imgSubtitle="We are  proud of having an extensive track record of assisting businesses to constantly improve their tech and keep up with their needs without going over budget. Below are some of the most successful examples of how we strive to make a positive impact.  " rounded={true}/>
        <div className={styles.projectsContents}>
            {projects}
        </div>
  
        <Footer/>
      </>
    );
  }
  
  export default ProjectsPage