import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

function SingleResult(props) {
    const { title, time, image } = props;

    useEffect(() => {
        setTimeout(function () {
            const element = document.getElementById("banner");
            element.scrollIntoView();
        }, 1000);
    }, []);
    return (
        <Link to={`/recipes/${title}`} id={title} className="recipe">
            {title}<br />
            Ready in {time} minutes<br />
            <img src={image} alt={title} className="preview" /><br /><br />
        </Link>
    )
}

export default SingleResult;