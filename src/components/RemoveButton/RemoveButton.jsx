import React, {useState, useEffect} from 'react';
import "./RemoveButton.scss"

const RemoveButton = (props) => {

    const {id} = props

    let removeFromLocalStorage = function (name, value) {

        let stored = JSON.parse(localStorage.getItem("nominations"));
        let checker = stored[0].movieNomination;
        let nomination = [JSON.stringify(id)];
        console.log(`This is Stored ${checker}`)
        console.log(`This is Id ${id}`)
        console.log(`This is Nomination ${nomination}`)

        if (checker === id) {
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