import React, {Component} from 'react';
import axios from "axios"
import './Main.scss';

import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import NominationList from "../../components/NominationList/NominationList";

const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "6f490190";

export default class Main extends Component {

    state = {
        resultsListing: [],
        nominationListing: [
            {
                title: "Rambo",
                year: 1999
            }
        ],
        searchQuery: "Rambo"
    }

    componentDidUpdate(searchQuery) {
        axios.get(`${API_URL}t=${searchQuery}&apikey=${API_KEY}`)
            .then(response => {
                this.setState({
                    resultsListing: response.data
                })
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const {resultsListing, nominationListing, searchQuery} = this.state

        return (
            <main className="main">
                <h1 className="main__title">The Shoppies</h1>
                <section className="main__section">
                    <article className="main__block">
                        <h3 
                            className="main__label">
                            Movie Title
                        </h3>
                        <SearchBar />
                    </article>
                </section>
                <section className="main__section">
                    <article className="main__block">
                        <h2 
                            className="main__subtitle">
                            Results for "{searchQuery}"
                        </h2>
                        <ResultsList 
                            resultsListing={resultsListing}
                            nominationListing={nominationListing}
                        />
                    </article>
                    <article className="main__block">
                        <h2 
                            className="main__subtitle">
                            Nominations
                        </h2>
                        <NominationList 
                            nominationListing={nominationListing}
                        />
                    </article>
                </section>
    
            </main>
        );
    }
}