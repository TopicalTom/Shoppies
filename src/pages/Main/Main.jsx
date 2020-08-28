import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Main.scss';

// Logo
import Shoppies from "../../assets/icons/ShoppiesLogo.svg";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import NominationList from "../../components/NominationList/NominationList";

// API Variables
const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "6f490190";
const queryType = "Movie";

function Main() {
    const [resultsListing, setResultsListing] = useState([]);
    const [nominationListing, setNominationListing] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Updates Search Query Parameters
    function handleChange(e) {
        setSearchQuery(e.target.value)
    }

    // Updates Results Listings
    useEffect(() => {
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
            .then(response => {
                setResultsListing(response.data.Search)
            })
            .catch(error => {
                console.log(error)
            })
    }, [searchQuery]);

    // Updates Nomination Listings
    useEffect(() => {
        const nominationID = JSON.parse(window.localStorage.getItem("nominations"))
        
        axios.get(`${API_URL}i=${nominationID}&apikey=${API_KEY}`)
            .then(response => {
                setNominationListing([
                    {
                        title: response.data.Title,
                        year: response.data.Year,
                        id: response.data.imdbID
                    }
                ])
            })
            .catch(error => {
                console.log(error)
            })
    }, [nominationListing]);


    return (
        <main className="main">
            <section className="main__container">
                <header className="main__header">
                    <img 
                        className="main__logo"
                        alt="Shoppies Logo"
                        src={Shoppies}
                    />
                    <div>
                        <span 
                            className="main__pretext">
                            The
                        </span>
                        <h1 
                            className="main__title">
                            Shoppies
                        </h1>
                    </div>
                </header>
                <article className="main__section">
                    <SearchBar
                        handleChange={handleChange} 
                    />
                    </article>
                <article className="main__section">
                    <div className="main__block main__block--half">
                        {resultsListing && resultsListing.length > 0 
                            ?   <h2 
                                    className="main__subtitle">
                                    Movies with "{searchQuery}"
                                </h2>
                            :   <h2 
                                    className="main__subtitle">
                                    Search Results
                                </h2>
                        }
                        <ResultsList 
                            resultsListing={resultsListing}
                        />
                    </div>
                    <div className="main__block main__block--half">
                        <h2 
                            className="main__subtitle">
                            My Nominations
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

export default Main;

/*
import React, {Component} from 'react';
import axios from "axios";
import './Main.scss';

// Logo
import Shoppies from "../../assets/icons/ShoppiesLogo.svg";

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
        const parameters = e.target.value;
        this.setState({ 
            searchQuery: parameters
        })
        this.movieSearch(parameters)
    }

    movieSearch = (parameters) => {
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

    pullNominations = () => {
        const nominationID = JSON.parse(window.localStorage.getItem("nominations"))

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

    componentDidMount() {
        this.movieSearch();
        this.pullNominations();
    }

    render() {

        const {resultsListing, nominationListing, searchQuery} = this.state

        return (
            <main className="main">
                <section className="main__container">
                    <header className="main__header">
                        <img 
                            className="main__logo"
                            src={Shoppies}
                        />
                        <div>
                            <span className="main__pretext">The</span>
                            <h1 className="main__title">Shoppies</h1>
                        </div>
                    </header>
                    <article className="main__section">
                        <SearchBar
                            handleChange={this.handleChange} 
                        />
                    </article>
                    <article className="main__section">
                        <div className="main__block main__block--half">
                            {resultsListing && resultsListing.length > 0 
                                ?   <h2 className="main__subtitle">
                                        Movies with "{searchQuery}"
                                    </h2>
                                :   <h2 className="main__subtitle">
                                        Search Results
                                    </h2>
                            }
                            <ResultsList 
                                resultsListing={resultsListing}
                            />
                        </div>
                        <div className="main__block main__block--half">
                            <h2 
                                className="main__subtitle">
                                My Nominations
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

*/