import React from 'react';
import {Link} from "react-router-dom";
import Image from "../images/banner.png";

function Banner() {
    return (
        <div>
            <Link to="/"><img className="banner" src={Image} alt="banner" /></Link>
        </div>
    );
}

export default Banner;