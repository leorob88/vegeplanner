import React from "react";

function TimeReset() {
    return (
        <div className="reset-button">
            <button type="button" onClick={() => {
                document.getElementById("radio5").checked = false;
                document.getElementById("radio15").checked = false;
                document.getElementById("radio40").checked = false;
                document.getElementById("radio60").checked = false;
            }}>Reset</button>
        </div>
    )
}
function NumberReset() {
    return (
        <div className="reset-button">
            <button type="button" onClick={() => {
                document.getElementById("radio10").checked = false;
                document.getElementById("radio20").checked = false;
                document.getElementById("radio50").checked = false;
                document.getElementById("radio100").checked = false;
            }}>Reset</button>
        </div>
    )
}

export { TimeReset, NumberReset };