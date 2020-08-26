import React from 'react';
import uuid from "react-uuid";
import './NominationList.scss';

import Nomination from "../Nomination/Nomination";

const NominationList = (props) => {

    const {nominationListing} = props

    if (nominationListing && nominationListing !== undefined) {
        return (
            <ul className="nominations">
                {nominationListing
                    .map((listing) => {
                        return <Nomination {...listing} key={uuid()} />
                    }
                )}
            </ul>
        );
    } else {
        return <></>
    }
}

export default NominationList;