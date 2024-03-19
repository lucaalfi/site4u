import companyLogo from '../assets/site4ulogo.png'
import styles from './SideBar.module.css'
import SideBarButton from './SideBarButton';
import PropTypes from 'prop-types'

function SideBar(props){

    return(
        <div className={styles.sideMenu} id="sideMenu">
            <SideBarButton refName="Site 4 u" refr="/home" isActive={props.activePage=="home"}/>
            <SideBarButton refName="Team" refr="/team" isActive={props.activePage=="team"}/>
            <SideBarButton refName="Projects" refr="/projects" isActive={props.activePage=="projects"}/>
            <SideBarButton refName="FAQs" refr="/faq" isActive={props.activePage=="faq"}/>
            <SideBarButton refName="Get Started" refr="/contact" isActive={props.activePage=="contact"}/>
        </div>
    );
}

SideBar.propTypes = {
    activePage: PropTypes.string,
}

export default SideBar



