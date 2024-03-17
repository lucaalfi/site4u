import companyLogo from '../assets/site4ulogo.png'

import styles from './Banner.module.css'
import PropTypes from 'prop-types'

function Banner(props){
    return(
        <div className={props.rounded? `${styles.banner} ${styles.rounded}`:styles.banner}>
            <div className={styles.leftStacker}>
                <img src={companyLogo} alt="bump" className={ props.heroImg?  styles.heroImg:styles.hidden}></img>
                <div className={styles.leftPannel}>
                    <h1 className={styles.bannerTxt}>{props.title}</h1>
                    {(typeof props.subtitle == undefined)?  <></>: <p className={styles.subtitle}>{props.subtitle}</p>}
                </div>
            </div>
            
            <div className={styles.rightPannel}>
                {(typeof props.imgSrc == undefined)?  <></>: <img className={styles.bannerImg} src={props.imgSrc}></img>}
                {(typeof props.imgSubtitle == undefined)?  <></>: <p className={styles.imgSubtitle}>{props.imgSubtitle}</p>}
            </div>
        </div>
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    subtitle:PropTypes.string,
    imgSrc:PropTypes.string,
    imgSubtitle: PropTypes.string,
    rounded: PropTypes.bool,
    heroImg: PropTypes.bool,
}

export default Banner