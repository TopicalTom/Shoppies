import React, { useContext, useState, useLayoutEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import "./NominateButton.scss"

const NominateButton = (props) => {
    const {id} = props
    const {nominations, setNominations} = useContext(NomContext);
    const [isNominated, setIsNominated] = useState(false);

    // Adds Movie Nomination
    function addNomination() {
        let currentNominations = JSON.parse(localStorage.getItem('nominations')) || [];
        let newNomination = { "movieNomination": id }

        // Pushes New Nomination to Context State and Local Storage
        currentNominations.push(newNomination);
        localStorage.setItem("nominations", JSON.stringify(currentNominations));
        setNominations(JSON.parse(localStorage.getItem("nominations")));
        
        // Toggles Button state to disabled to prevent duplicate movie nominations
        setIsNominated(true);
    }

    // Checks if Movie is already in Local Storage
    useLayoutEffect(() => {
        
        // Returns Object if matching ID exists in Nominations
        const match = nominations.find(item => item.movieNomination === id);

        // If Match exists, disables the movies' Nomination Button
        (match !== undefined 
            ?   setIsNominated(true)
            :   setIsNominated(false)
        )
    }, [nominations, id]); // Updates on Nomination Change

    return (
        <button 
            className="nominate" 
            onClick={() => addNomination()} 
            disabled={isNominated}>
            <span 
                className="nominate__label">
                {isNominated ? "Added" : "Nominate"}
            </span>
        </button>
    );
}

export default NominateButton;