import PropTypes from 'prop-types'

function Student(props){
    
    
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.isStudent? "Yea" : "Nah"}</p>
            
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}


export default Student