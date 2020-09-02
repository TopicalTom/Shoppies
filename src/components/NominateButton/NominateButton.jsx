import React, { useContext, useState, useEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import "./NominateButton.scss"

const NominateButton = (props) => {
    const {id} = props
    const {nominations, setNominations} = useContext(NomContext);
    const [isNominated, setIsNominated] = useState(false);

    // Adds Movie Nomination to Local Storage and Listings
    function addNomination() {
        let currentNominations = JSON.parse(localStorage.getItem('nominations')) || [];
        let newNomination = { "movieNomination": id }

        currentNominations.push(newNomination);
        localStorage.setItem("nominations", JSON.stringify(currentNominations));
        setNominations(JSON.parse(localStorage.getItem("nominations")));
        setIsNominated(true);
    }

    // Checks if Movie is already in Local Storage
    useEffect(() => {
        const match = nominations.filter(item => item.movieNomination === id);
        
        if(match && match.length !== 0) {
            (id === match[0].movieNomination 
                ?   setIsNominated(true)
                :   setIsNominated(false)
            )
        }
    }, [nominations, setNominations, setIsNominated, id]);

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