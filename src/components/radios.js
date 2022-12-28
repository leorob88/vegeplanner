import React from "react";

function Radio(props) {
    return (
        <div>
            <input type="radio" id={`radio${props.number}`} name={props.category} className="filter-radio" />
            <label htmlFor={`radio${props.number}`}>{props.number}</label>
        </div>
    )
}

export default Radio;