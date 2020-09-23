import React, {useContext, useState, useEffect} from 'react';
import { NomContext } from "../../hooks/useContext";
import uuid from "react-uuid";
import './NominationList.scss';

// Components
import Nominee from "../Nominee/Nominee";

const NominationList = (props) => {
    const {nominationListing} = props
    const {nominations, setNominations} = useContext(NomContext);
    const [currentProgress, setCurrentProgress] = useState(1);

    useEffect(() => {
        setCurrentProgress(nominations.length)
    }, [nominations, setNominations])

    return (
        <article className="nominations">
            <div className="nominations__container">
                <ol className="nominations__listings">
                    {nominationListing
                        .map((listing) => {
                            return <Nominee {...listing} key={uuid()}/>
                        }
                    )}
                </ol>
                <ul className="nominations__placeholders">
                    <li className="nominations__backing" />
                    <li className="nominations__backing" />
                    <li className="nominations__backing" />
                    <li className="nominations__backing" />
                    <li className="nominations__backing" />
                </ul>
            </div>
            <div className="nominations__details">
                <span 
                    className="nominations__progress">
                    {currentProgress < 5
                        ?   `${5 - currentProgress} Pick${currentProgress !== 4 ? "s" : ""} Remaining`
                        :   "Nominations Complete"
                    }
                </span>
                <button 
                    className="nominations__submit"
                    disabled={currentProgress < 5}>
                    <span
                        className="nominations__label">
                        Submit Nominations
                    </span>
                </button>
            </div>
        </article>
    );
}

export default NominationList;