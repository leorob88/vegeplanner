import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Contacts() {
    return (
        <div className='social-links'>
            <p className='social-title'>My social links:</p>
            <div className="social-content icon-zoom">
                <a href="https://www.youtube.com/channel/UCvjnulTw54J_OtR3evmgTpQ" target="_blank" rel="noopener noreferrer" className="social"><i className="fa fa-solid fa-youtube-play red"></i></a>
            </div>
            <div className="social-content icon-zoom">
                <a href="https://www.twitch.tv/sunbro_gilgamesh" target="_blank" rel="noopener noreferrer" className="social"><i className="fa fa-solid fa-twitch purple"></i></a>
            </div>
            <div className="social-content icon-zoom">
                <a href="https://www.facebook.com/sunbro.gilgamesh" target="_blank" rel="noopener noreferrer" className="social"><i className="fa fa-solid fa-facebook-official blue"></i></a>
            </div>
        </div>
    );
}

export default Contacts;