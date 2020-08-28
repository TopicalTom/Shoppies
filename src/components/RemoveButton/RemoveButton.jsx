import React, {useState, useEffect} from 'react';
import "./RemoveButton.scss"

const RemoveButton = (props) => {

    const {id} = props

    let removeFromLocalStorage = function (name, value) {

        let stored = JSON.parse(localStorage.getItem("nominations"));
        stored = stored.filter(item => item.movieNomination !== id);

        localStorage.setItem("nominations", [JSON.stringify(stored)])
    }

    return (
        <button className="remove" onClick={removeFromLocalStorage}>
            <span className="remove__label">Remove</span>
        </button>
    );
}

export default RemoveButton;