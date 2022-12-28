import React from 'react';

function TextAndButton(props) {
    return (
        <div className="text-and-button">
            <input type="text" id="text" name="text" placeholder="Search..." onKeyPress={function (key) {
                if (key.key === "Enter") {
                    props.function();
                }
            }} />
            <div className="veganBox">
                <input type="checkbox" id={"vegan-check"} name={"vegan-check"} value={"vegan-check"} />
                <label htmlFor={"vegan-check"}>Only vegan results</label>
            </div>
            <button type="button" onClick={props.function}>Search</button>
        </div>
    );
}

export default TextAndButton;