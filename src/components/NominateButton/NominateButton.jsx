import React, {useState, useLayoutEffect} from 'react';
import "./NominateButton.scss"

const NominateButton = (props) => {

    const {id} = props
    const [alreadyNominated, setAlreadyNominated] = useState(false);

    // Adds Nominated Movie to Local Storage
    let addToLocalStorage = function (name, value) {

        /*

        let existing = localStorage.getItem("nominations");

        existing = existing ? existing.split(',') : [];
        existing.push(nomination);

        */

        localStorage.setItem("nominations", JSON.stringify(id))
    }

    // Checks if Movie has already been nominated
    useLayoutEffect(() => {

        const exists = localStorage.getItem("nominations")
        const status = JSON.stringify(id);

        (status === exists 
            ? setAlreadyNominated(true)
            : setAlreadyNominated(false)
        )

    })

    // () => window.localStorage.setItem("nomination", JSON.stringify(nomination))

    return (
        <button 
            className="nominate" 
            onClick={addToLocalStorage} 
            disabled={alreadyNominated}>
            {alreadyNominated
                ?   <span 
                        className="nominate__label">
                        Nominated
                    </span>
                :   <span 
                        className="nominate__label">
                        Nominate
                    </span>
            }
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