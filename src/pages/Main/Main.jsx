import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import axios from "axios";
import './Main.scss';

// Components
import Nominations from "../../components/NominationList/NominationList";
import Placeholder from "../../components/NominationPlaceholder/NominationPlaceholder";
import Help from "../../components/HelpDropdown/HelpDropdown";

// API Variables
const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "6f490190";

function Main() {
    const {nominations, setNominations} = useContext(NomContext);
    const [nominationListing, setNominationListing] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false);
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
    useEffect(() => {
        setShouldUpdate(false)
    }, [shouldUpdate]);

    return (
        <main className="main">
            <div className="main__container">
                <section className="main__section">
                    <h2 className="main__heading">My Nominations</h2>
                    <div className="main__context">
                        <p className="main__instructions">Nominate your top 5 favourite movies for award consideration</p>
                        <Help 
                            details="You have until December 10th, 2020 to submit your nominations. Nominations will be saved if you leave this page."
                        />
                    </div>
                </section>
                {nominations.length !== 0
                    ?   <Nominations nominationListing={nominationListing}/>
                    :   <Placeholder />
                }
            </div>    
        </main>
    );
}

export default Main;