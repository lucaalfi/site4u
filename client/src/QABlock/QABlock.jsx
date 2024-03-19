import styles from './QABlock.module.css'
import PropTypes from 'prop-types'

function QABlock(props){
    
    return (
        <div className={styles.blockHolder}>
            <div className={styles.questionHolder}>
                <h4>Q:</h4>
                <p>{props.question}</p>
            </div>
            
            <div className={styles.answerHolder}>
                <h4>A:</h4>
                <p>{props.answer}</p>
            </div>
        </div>
    );
}

export default QABlock

QABlock.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
}