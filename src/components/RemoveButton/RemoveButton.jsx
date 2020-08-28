import React, {useState, useEffect} from 'react';
import "./RemoveButton.scss"

const RemoveButton = (props) => {

    const {id} = props
    const [nomination, setNomination] = useState(id)

    /*

    useEffect(() => {
        setNomination
        window.localStorage.setItem("nomination", JSON.stringify(nomination))
    })

    */

    return (
        <button className="remove" onClick={() => window.localStorage.setItem("nomination", JSON.stringify(nomination))}>
            <span className="remove__label">Remove</span>
        </button>
    );
}

export default RemoveButton;