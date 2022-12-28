import React from 'react';

function SingleInstruction(props) {
    return (
        <div>
            {props.length === 1 ? props.step : <li>{props.step}</li>}
        </div>
    );
}
export default SingleInstruction;