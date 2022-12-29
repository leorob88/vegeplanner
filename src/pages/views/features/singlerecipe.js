import React from 'react';
import { useParams } from "react-router-dom";
import Ingredients from '../../../components/ingredients';
import Instructions from "../../../components/instructions";

function SingleRecipe(props) {
    const { recipe } = useParams();
    const current = props.source.filter(element => element.title === recipe)[0];

    return (
        <div className='single-page'>
            <h3>{current.title}</h3>
            <h4>This recipe can be prepared in {current.readyInMinutes} minutes</h4>
            <img className='single-image' src={current.image} alt={current.title} />
            <Ingredients list={current.nutrition.ingredients} />
            <Instructions list={current.analyzedInstructions[0].steps} />
            <h1>ENJOY !!!</h1>
        </div>
    );
}

export default SingleRecipe;