import React, {Component} from 'react';
import axios from "axios";
import './Main.scss';

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import NominationList from "../../components/NominationList/NominationList";

// API Variables
const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "6f490190";
const queryType = "Movie";

export default class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            resultsListing: [], // Displays search results
            nominationListing: [], // Saved movie nominations
            searchQuery: "" // SearchBar parameters
        }
    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value})
    }

    componentDidUpdate() {

        const movieQuery = this.state.searchQuery;

        // Returns Movies that match search parameters
        axios.get(`${API_URL}s=${movieQuery}&type=${queryType}&apikey=${API_KEY}`)
            .then(response => {
                this.setState({
                    resultsListing: response.data.Search 
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        
        const nominationID = "tt1285016"

        // Returns Movie that matches imdb ID (for Nom List)
        axios.get(`${API_URL}i=${nominationID}&apikey=${API_KEY}`)
            .then(response => {
                this.setState({
                    movie: {
                        title: response.data.Title,
                        year: response.data.Year,
                        id: response.data.imdbID
                    }
                })
                this.setState({nominationListing: [this.state.movie]})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const {resultsListing, nominationListing, searchQuery} = this.state

        return (
            <main className="main">
                <section className="main__container">
                    <h1 className="main__title">The Shoppies</h1>
                    <article className="main__section">
                        <div className="main__block main__block--full">
                            <h3 
                                className="main__label">
                                Movie Title
                            </h3>
                            <input 
                                className="search"
                                placeholder="Search"
                                name="search"
                                id="search"
                                type="text"
                                onChange={this.handleChange} 
                            />
                        </div>
                    </article>
                    <article className="main__section">
                        <div className="main__block main__block--half">
                            <h2 
                                className="main__subtitle">
                                Results for "{searchQuery}"
                            </h2>
                            <ResultsList 
                                resultsListing={resultsListing}
                            />
                        </div>
                        <div className="main__block main__block--half">
                            <h2 
                                className="main__subtitle">
                                Nominations
                            </h2>
                            <NominationList 
                                nominationListing={nominationListing}
                            />
                        </div>
                    </article>

                </section>    
            </main>
        );
    }
}