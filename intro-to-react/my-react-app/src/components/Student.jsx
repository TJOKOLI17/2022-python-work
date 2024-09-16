import PropTypes from 'prop-types'

function Student(props){ //props (short for properties) is an object
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student

/* PROPS */
    //props = read-only properties that are shared b/w components.
    //        A parent component can sedn data to the child component
    //        <Componenet key=value/>

    //prop-types = a mechanism that ensures that the passed 
    //             value is of the correct data type;
    //age: PropTypes.number
  
    //defaultProps = default values for props in case they aren't
    //               passed from the parent value.
    //    NOTE: DEFAULT PROPS WILL BE REMOVED IN A FUTURE REACT UPDATE
    //          USE JavaScript DEFAULT PARAMETERS INSTEAD.