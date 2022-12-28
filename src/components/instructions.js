import React from 'react';
import SingleInstruction from "./singleinstruction";

function Instructions(props) {
    const dynamicText = props.list.length === 1 ? "This is simple" : "You just need to follow these instructions";
    return (
        <div className='instructions'>
            <h4>{dynamicText}:</h4>
            <ol>
                {props.list && props.list.map(listElement => <SingleInstruction key={listElement.number} number={listElement.number} step={listElement.step} length={props.list.length} />)}
            </ol>
        </div>
    );
}
export default Instructions;