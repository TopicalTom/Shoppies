import React, { useContext, useState, useEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import "./NominateButton.scss"

const NominateButton = (props) => {

    const {id} = props
    const {nominations, setNominations} = useContext(NomContext);
    const [isNominated, setIsNominated] = useState(false);

    // Adds Movie Nomination to Local Storage
    const addToLocalStorage = () => {

        let currentNominations = JSON.parse(localStorage.getItem('nominations')) || [];
        let newNomination = { "movieNomination": id }

        currentNominations.push(newNomination);
        localStorage.setItem("nominations", JSON.stringify(currentNominations));
        setNominations(currentNominations);
        setIsNominated(true);
    }

    // Checks if Movie is already in Local Storage
    useEffect(() => {

        const stored = JSON.parse(localStorage.getItem("nominations"));
        const match = stored.filter(item => item.movieNomination == id);

        if(stored && match && match.length !== 0) {

            let nominated = match[0].movieNomination;

            (match && match.length !== 0 && id == nominated 
                ? setIsNominated(true)
                : setIsNominated(false)
            )
        }
    }, [nominations, setNominations]);

    return (
        <button 
            className="nominate" 
            onClick={addToLocalStorage} 
            disabled={isNominated}>
            {isNominated
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


// Original Working
/*
    // Adds Nominated Movie to Local Storage
    let addToLocalStorage = function (name, value) {

        

        let existing = localStorage.getItem("nominations");

        existing = existing ? existing.split(',') : [];
        existing.push(nomination);

        

        localStorage.setItem("nominations", JSON.stringify(id))
    }

*/

// Second Working
/*
    // Adds Nominated Movie to Local Storage
    let addToLocalStorage = function (name, value) {

	    // Get the existing data
        let existing = JSON.parse(localStorage.getItem("nominations"));
        console.log(existing)

	    // If no existing data, create an array
	    // Otherwise, convert the localStorage string to an array
	    existing = existing ? existing.split(',') : [];

	    // Add new data to localStorage Array
        existing.push(id);
        
        console.log(`Updated ${existing}`)

	    // Save back to localStorage
	    localStorage.setItem("nominations", [JSON.stringify(existing)]);
    }

*/