import React from 'react';
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className='general-page'>
            <h3>Error!</h3>
            <p>Return to <Link to="/">Home</Link> or reload the page.</p>
        </div>
    );
}

export default Error;