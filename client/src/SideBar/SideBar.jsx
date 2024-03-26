import companyLogo from '../assets/site4ulogo.png'
import styles from './SideBar.module.css'
import SideBarButton from './SideBarButton';
import PropTypes from 'prop-types'

function SideBar(props){
    let collapser = true;
    function collapse(){
        let toCollapse = document.getElementById("toCollapse");
        let sideMenu = document.getElementById("sideMenu");
        let contentSide = document.getElementById("contentSide");

        collapser = !collapser;

        if(!collapser){
            toCollapse.style.display = "none";
            sideMenu.style.width = "5%";

            if(contentSide!=null){
                contentSide.style.maxWidth = "95%"; 
                contentSide.style.marginLeft = "5%"; 
            }
        }
        else{
            toCollapse.style.display = "block";
            sideMenu.style.width = "18%";

            if(contentSide!=null){
                contentSide.style.maxWidth = "82%"; 
                contentSide.style.marginLeft = "18%"; 
            }            
        }
    }

    return(
        <div className={styles.sideMenu} id="sideMenu">
            <img className={styles.collapseLogo} alt="icon" src={companyLogo} onClick={collapse}></img>
            <div className={styles.collapsible} id="toCollapse">
            <SideBarButton refName="Site 4 u" refr="/home" isActive={props.activePage=="home"}/>
            <SideBarButton refName="Team" refr="/team" isActive={props.activePage=="team"}/>
            <SideBarButton refName="Projects" refr="/projects" isActive={props.activePage=="projects"}/>
            <SideBarButton refName="FAQs" refr="/faq" isActive={props.activePage=="faq"}/>
            <SideBarButton refName="Get Started" refr="/contact" isActive={props.activePage=="contact"}/>
            </div>

        </div>
    );
}

SideBar.propTypes = {
    activePage: PropTypes.string,
}

export default SideBar



