import React, { useContext, useState, useLayoutEffect, useEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import axios from "axios";
import './NominationList.scss';

// Components
import Nominee from "../Nominee/Nominee";

// API Variables
const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "6f490190";

const NominationList = () => {
    const {nominations, setNominations} = useContext(NomContext);
    const [nominationListing, setNominationListing] = useState([]);

    // Displays Movie Nomination Listings
    useLayoutEffect(() => {

        //if (local) {
        {nominations
            .map((item) => {
                axios.get(`${API_URL}i=${item.movieNomination}&apikey=${API_KEY}`)
                    .then(response => {
                        const nominee = ({
                            title: response.data.Title,
                            year: response.data.Year,
                            id: response.data.imdbID
                        })
                        nominationListing.push(nominee)
                        setNominationListing(nominationListing)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                })
            }
        //}
            
    }, [setNominations, nominationListing]); // Runs on Stored Nomination Changes

    if(nominationListing && nominationListing.length !== 0) {
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