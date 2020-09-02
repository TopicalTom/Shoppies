import React, {useContext} from 'react';
import { NomContext } from "../../hooks/useContext";
import "./RemoveButton.scss"

const RemoveButton = (props) => {
    const {id} = props
    const {setNominations} = useContext(NomContext);

    // Removes Movie Nomination from Local Storage and Listings
    function removeNomination() {
        let stored = JSON.parse(localStorage.getItem("nominations"));
        
        stored = stored.filter(item => item.movieNomination !== id);
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