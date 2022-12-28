import React from 'react';
import { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Top() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div id="to-top" onClick={function () { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}><i className="fa fa-solid fa-angle-up" /></div>
    );
}

export default Top;