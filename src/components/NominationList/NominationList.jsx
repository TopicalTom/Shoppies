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
                <ul className="nominations__listings">
                    {nominationListing
                        .map((listing) => {
                            return <Nominee {...listing} key={uuid()}/>
                        }
                    )}
                </ul>
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
                <button className="nominations__share">Share</button>
            </div>
        </article>
    );
}

export default NominationList;

/*

    if(nominationListing && nominations.length != 0) {

        return (
            <ul className="nominations">
                {nominationListing
                    .map((listing) => {
                        return <Nominee {...listing} key={uuid()}/>
                    }
                )}
            </ul>
        );
    } else {
        return <span className="nominations__empty">Nominated movies will show up here</span>

*/

/*
else {
            nominations.map((item) => {
                axios.get(`${API_URL}i=${item.movieNomination}&apikey=${API_KEY}`)
                    .then(response => {
                        const nominee = ({
                            title: response.data.Title,
                            year: response.data.Year,
                            id: response.data.imdbID,
                            poster: response.data.Poster
                        })
                        newNominations(nominee)
                    })
                    .then(() => {
                        setNominationListing(newNominations)
                        setShouldUpdate(true)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                })
        }

*/