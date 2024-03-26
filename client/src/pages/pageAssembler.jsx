import HomePage from "../pages/homePage.jsx";
import TeamPage from "../pages/teamPage.jsx";
import ProjectsPage from "../pages/projectsPage.jsx";
import FaqPage from "../pages/faqPage.jsx";
import ContactPage from "../pages/contactPage.jsx";
import SideBar from "../SideBar/SideBar.jsx";

import styles from "./pageAssembler.module.css";

import PropTypes from 'prop-types'

function PageAssembler(props){
    var desiredPage = <HomePage />; 
    
    switch(props.desiredPage) {
        case "home":
            desiredPage = <HomePage />; 
          break;
        case "team":
            desiredPage = <TeamPage />; 
          break;
        case "projects":
            desiredPage = <ProjectsPage />; 
          break;
        case "faq":
            desiredPage = <FaqPage />; 
          break;
        case "contact":
            desiredPage = <ContactPage />; 
          break;                              
        default:
            desiredPage = <ProjectsPage />; 
      }


    return(
        <>
        <SideBar activePage={props.desiredPage}/>
        <div className={styles.contentSide} id="contentSide">
          {desiredPage}
        </div>
        </>
    );

}

PageAssembler.propTypes = {
    desiredPage: PropTypes.string,
}

export default PageAssembler