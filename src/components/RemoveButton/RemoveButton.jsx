import React, {useContext, useState, useEffect} from 'react';
import { NomContext } from "../../hooks/useContext";
import "./RemoveButton.scss"

const RemoveButton = (props) => {

    const {id} = props
    const {nominations, setNominations} = useContext(NomContext);

    const removeFromLocalStorage = () => {

        let stored = JSON.parse(localStorage.getItem("nominations"));
        stored = stored.filter(item => item.movieNomination !== id);

        localStorage.setItem("nominations", [JSON.stringify(stored)]);
        setNominations(stored)
    }

    return (
        <button className="remove" onClick={removeFromLocalStorage}>
            <span className="remove__label">Remove</span>
        </button>
    );
}

export default RemoveButton;