import React from 'react';

function SingleIngredient(props) {
    return (
        <div>
            <li>{props.name}: {props.amount} {props.unit}</li>
        </div>
    );
}
export default SingleIngredient;