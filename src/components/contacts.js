import React from 'react';
import YouTube from "../images/youtube-icon.png";
import Twitch from "../images/twitch-icon.png";
import FaceBook from "../images/facebook-icon.png";
import Patreon from "../images/patreon-icon.png";

function Contacts() {
    return (
        <div className='social-links'>
            <p className='social-title'>My socials:</p>
            <div className="social-content icon-zoom">
                <a href="https://www.youtube.com/channel/UCvjnulTw54J_OtR3evmgTpQ" target="_blank" rel="noopener noreferrer" className="social"><img src={YouTube} alt="youtube" /></a>
            </div>
            <div className="social-content icon-zoom">
                <a href="https://www.twitch.tv/sunbro_gilgamesh" target="_blank" rel="noopener noreferrer" className="social"><img src={Twitch} alt="twitch" /></a>
            </div>
            <div className="social-content icon-zoom">
                <a href="https://www.facebook.com/sunbro.gilgamesh" target="_blank" rel="noopener noreferrer" className="social"><img src={FaceBook} alt="facebook" /></a>
            </div>
            <div className="social-content icon-zoom">
                <a href="https://www.patreon.com/sunbrogilgamesh" target="_blank" rel="noopener noreferrer" className="social"><img src={Patreon} alt="patreon" /></a>
            </div>
        </div>
    );
}

export default Contacts;