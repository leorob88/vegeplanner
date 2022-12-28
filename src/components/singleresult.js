import React from 'react';
import { Link } from "react-router-dom";

function SingleResult(props) {
    const { title, time, image } = props;
    return (
        <Link to={`/recipes/${title}`} id={title} className="recipe">
            {title}<br />
            Ready in {time} minutes<br />
            <img src={image} alt={title} className="preview" /><br /><br />
        </Link>
    )
}

export default SingleResult;