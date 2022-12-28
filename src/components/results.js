import React from 'react';
import SingleResult from './singleresult';

function Results(props) {
    const { results } = props;
    return (
        <div id="results">
            {results && results.map((recipe) => <SingleResult key={recipe.id} title={recipe.title} time={recipe.readyInMinutes} image={recipe.image} />)}
        </div>
    );
}

export default Results;