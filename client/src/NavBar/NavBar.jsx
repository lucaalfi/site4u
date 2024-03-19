import companyLogo from '../assets/site4ulogo.png'
import styles from './NavBar.module.css'
import PropTypes from 'prop-types'

function NavBar(props){

    return(
        <div className={styles.navContainer} id="NavContainer">
            <ul className={styles.navBar} id="NavBar">
                <li className={props.activePage=="home"? `${styles.active} ${styles.left}`:styles.left}>
                    <div className={styles.imgHolder}>
                        <img className={styles.navLogo} src={companyLogo} alt="icon"></img>
                    </div>
                    <div className={styles.nameHolder}>
                        <a className={props.activePage=="home"? styles.active:""} href="/home">SITE 4 U</a>
                    </div>
                </li>
                <li className={props.activePage=="contact"? styles.active:""} ><a className={props.activePage=="contact"? styles.active:""} href="/contact">Get Started</a></li>
                <li className={props.activePage=="faq"? styles.active:""} ><a className={props.activePage=="faq"? styles.active:""} href="/faq">FAQs</a></li>
                <li className={props.activePage=="projects"? styles.active:""} ><a className={props.activePage=="projects"? styles.active:""} href="/projects">Projects</a></li>
                <li className={props.activePage=="team"? styles.active:""} ><a className={props.activePage=="team"? styles.active:""} href="/team">Team</a></li>
                
                
            </ul>
        </div>

    );
}

NavBar.propTypes = {
    activePage: PropTypes.string,
}

export default NavBar