// import reactLogo from '../assets/react.svg'

import './MemberCard.css'
import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <img className="cardImage" alt="bump" src={props.imageSrc}></img>
            <h2 className='cardTitle'>{props.name + " ("+props.position+")"}</h2>
            <p className='cardText'>{props.description}</p>
            <div>
                {(typeof props.linkedIn == undefined)?  <></>: <a href={props.linkedIn} className="cardButton">LinkedIn</a>}
                {(typeof props.instagram == undefined)? <></>: <a href={props.instagram} className="cardButton">Instagram</a>}
            </div>
            
            
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    imageSrc:PropTypes.string,
    description:PropTypes.string,
    position: PropTypes.string,
    linkedIn: PropTypes.string,
    instagram: PropTypes.string,
}

export default Card