import React from 'react';
import uuid from "react-uuid";
import './NominationList.scss';

import Nominee from "../Nominee/Nominee";

const NominationList = (props) => {

    const {nominationListing, nominationID} = props

    if(nominationID) {
        return (
            <ul className="nominations">
                {nominationListing
                    .map((listing) => {
                        const key = `${listing.id}679`
                        return <Nominee {...listing} key={key}/>
                    }
                )}
            </ul>
        );
    } else {
        return <span className="nominations__empty">Nominated movies will show up here</span>
    }
}

export default NominationList;