import companyLogo from '../assets/site4ulogo.png'
import styles from './SideBarButton.module.css'
import PropTypes from 'prop-types'

function SideBarButton(props){

    return(
            <div className={styles.sideBttCont}>
                <div className={styles.imgHolder}>
                        <img className={props.isActive? `${styles.active} ${styles.navLogo}`:styles.hidden} src={companyLogo} alt="icon"></img>
                    </div>
                    <div className={styles.nameHolder}>
                        <a className={props.isActive? styles.active:""} href={props.refr}>{props.refName}</a>
                    </div>
            </div>
    );
}

SideBarButton.propTypes = {
    refName: PropTypes.string,
    refr: PropTypes.string,
    isActive: PropTypes.bool,
}

export default SideBarButton