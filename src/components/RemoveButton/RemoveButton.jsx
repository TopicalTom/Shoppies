import React, {useState, useEffect} from 'react';
import "./RemoveButton.scss"

const RemoveButton = (props) => {

    const {id} = props

    let removeFromLocalStorage = function (name, value) {

        let stored = JSON.parse(localStorage.getItem("nominations"));
        let nomination = [JSON.stringify(id)];
        console.log(`This is Stored ${stored}`)
        console.log(`This is Id ${id}`)
        console.log(`This is Nomination ${nomination}`)

        if (stored === id) {
            localStorage.removeItem("nominations", [JSON.stringify(id)])
        }
    }

    return (
        <button className="remove" onClick={removeFromLocalStorage}>
            <span className="remove__label">Remove</span>
        </button>
    );
}

export default RemoveButton;