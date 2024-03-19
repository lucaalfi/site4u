import styles from './ProjectDisplay.module.css'
import PropTypes from 'prop-types'

function ProjectDisplay (props){
    
    
    return(
        <div className={styles.display}>
            <a className={styles.projectTitle} href={(typeof props.projectLink == undefined)?  "": props.projectLink}>{props.name}</a>
            <div className={styles.imgDescHolder}>
                <img className={styles.projectImg} alt="bump" src={props.imageSrc} ></img>
                <div className={styles.descWrapper}>
                    <p className={styles.projectDesc}>{props.description}</p>
                </div>
                
            </div>
        </div>
    );
}

ProjectDisplay.propTypes = {
    name: PropTypes.string,
    imageSrc:PropTypes.string,
    description:PropTypes.string,
    projectLink:PropTypes.string,
}

export default ProjectDisplay