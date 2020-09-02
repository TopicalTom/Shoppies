import React, { useContext, useState, useLayoutEffect} from 'react';
import { NomContext } from "../../hooks/useContext";
import axios from "axios";
import uuid from "react-uuid";
import './NominationList.scss';

// Components
import Nominee from "../Nominee/Nominee";

// API Variables
const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "6f490190";

const NominationList = () => {
    const {nominations, setNominations} = useContext(NomContext);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [nominationListing, setNominationListing] = useState([]);
    const newNominations = useState([]);

    // Grabs OMDB Data based on Local Storage Movie Nomination Values 
    useLayoutEffect(() => {
        nominations.map((item) => {
            axios.get(`${API_URL}i=${item.movieNomination}&apikey=${API_KEY}`)
                .then(response => {
                    const nominee = ({
                        title: response.data.Title,
                        year: response.data.Year,
                        id: response.data.imdbID,
                        poster: response.data.Poster
                    })

                    // Moves New to Top
                    newNominations.unshift(nominee)
                        
                    // Moves Old to Bottom then Splices
                    newNominations.splice(nominations.length, newNominations.length - nominations.length)

                    // Sets Nomination Listing as New Nomination Data
                    setNominationListing(newNominations)
                    setShouldUpdate(true)
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }, [nominations, setNominations]);

    // Displays Updated Movie Nomination Listings
    useLayoutEffect(() => {
        setShouldUpdate(false)
    }, [shouldUpdate]);

    return (
        <div>
            <h2 className="main__subtitle">My Nominations</h2>
            <ul className="nominations">
                {nominationListing
                    .map((listing) => {
                        return <Nominee {...listing} key={uuid()}/>
                    }
                )}
            </ul>
        </div>
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