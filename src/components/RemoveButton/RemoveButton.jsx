import React, {useContext} from 'react';
import { NomContext } from "../../hooks/useContext";
import "./RemoveButton.scss"

const RemoveButton = (props) => {
    const {id} = props
    const {setNominations} = useContext(NomContext);

    // Removes Movie Nomination
    function removeNomination() {
        let stored = JSON.parse(localStorage.getItem("nominations"));
        
        // Returns Array of Nominations that don't match current Nomination
        stored = stored.filter(item => item.movieNomination !== id);
        
        // Sets Local Storage and Context State as the Filtered Array
        localStorage.setItem("nominations", [JSON.stringify(stored)]);
        setNominations(stored)
    }

    return (
        <button 
            className="remove" 
            onClick={() => removeNomination()}>
            <span 
                className="remove__label">
                Remove
            </span>
        </button>
    );
}

export default RemoveButton;