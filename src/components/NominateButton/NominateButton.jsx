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
            <span>{buttonLabel}</span>
        </button>
    );
}

export default NominateButton;