import React, {useState, useEffect} from 'react';
import "./NominateButton.scss"

const NominateButton = (props) => {

    const {id} = props
    const [nomination, setNomination] = useState(id)

    let addToLocalStorage = function (name, value) {

        /*

        let existing = localStorage.getItem("nominations");

        existing = existing ? existing.split(',') : [];
        existing.push(nomination);

        */

        localStorage.setItem("nominations", JSON.stringify(id))
    }

    /*

    useEffect(() => {
        setNomination
        window.localStorage.setItem("nomination", JSON.stringify(nomination))
    })

    */

    // () => window.localStorage.setItem("nomination", JSON.stringify(nomination))

    return (
        <button className="nominate" onClick={addToLocalStorage}>
            <span className="nominate__label">Nominate</span>
        </button>
    );
}

export default NominateButton;

/*
import React, {useState} from 'react';
import "./NominateButton.scss"

const NominateButton = (props) => {

    const {nominations, id} = props
    const [isNominated, setIsNominated] = useState(false);

    function checkNomination() {

        if (id === nominations) {
            setIsNominated(true)
        } else {
            setIsNominated(false)
        }
    }

    const buttonLabel = isNominated ? "Nominated" : "Nominate";

    return (
        <button className="nominate" onClick={checkNomination} disabled={isNominated}>
            <span className="nominate__label">{buttonLabel}</span>
        </button>
    );
}

export default NominateButton;
*/