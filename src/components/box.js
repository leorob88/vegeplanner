import React from "react";

function Box(props) {
    return (
        <div>
            <input type="checkbox" id={props.name} name={props.name} className="filter-box" />
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}

export default Box;