import React from 'react';

//PROPS from REDUX FORM!
export default (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input { ...props.input}/>
        </div>
    )
}