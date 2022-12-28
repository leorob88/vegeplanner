import React from 'react';
import Image from "../images/banner.jpg";

function Banner() {
    return (
        <div>
            <img className="banner" src={Image} alt="banner" />
        </div>
    );
}

export default Banner;