import React from 'react';
import SingleIngredient from "./singleingredient";

function Ingredients(props) {
    const dynamicText = props.list.length === 1 ? "this ingredient" : "these ingredients";
    return (
        <div className='ingredients'>
            <h4>You're going to need {dynamicText}:</h4>
            <ul>
                {props.list && props.list.map(listElement => <SingleIngredient key={listElement.id + listElement.amount} name={listElement.name} amount={listElement.amount} unit={listElement.unit} />)}
            </ul>
        </div>
    );
}
export default Ingredients;