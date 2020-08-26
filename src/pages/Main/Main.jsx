import React, {Component} from 'react';
import './Main.scss';

import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import NominationList from "../../components/NominationList/NominationList";

export default class Main extends Component {

    state = {
        resultsListing: [
            {
                title: "Rambo",
                year: 1999
            },
            {
                title: "Hey Ram",
                year: 2000
            },
            {
                title: "Ram Dass, Going Home",
                year: 2007
            }
        ],
        nominationListing: [
            {
                title: "Rambo",
                year: 1999
            }
        ],
        searchQuery: "ram"
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