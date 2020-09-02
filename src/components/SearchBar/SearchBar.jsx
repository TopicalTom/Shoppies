import React, { useContext, useState, useEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import './SearchBar.scss';

// Components
import Search from "../../assets/icons/Search.svg";
import Cancel from "../../assets/icons/Cancel.svg";

function SearchBar(props) {
    const {nominations} = useContext(NomContext);
    const {updateSearch, resetSearch, searchParams, length} = props
    const [picksProgress, setPicksProgress] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    // Updates UI Based on Search Field Input
    useEffect(() => {
        (length > 0 
            ? setHasContent(true)
            : setHasContent(false)
        )
    }, [length]);

    // Offers Helper Text Based on Remaining Nominations
    useEffect(() => {
        (nominations.length < 5 
            ? setPicksProgress(true)
            : setPicksProgress(false)
        )
    }, [nominations]);

    return (
        <form className="search">
            <img 
                className="search__icon" 
                src={Search}
                alt="Search Icon"
            />
            <label 
                className="search__label" 
                htmlFor="search"> 
                Movie Title Search
            </label>
            <input 
                className="search__input"
                placeholder="Search Movies"
                name="search"
                id="search"
                type="text"
                value={searchParams}
                onChange={updateSearch}
            />
            <span 
                className={`search__count ${hasContent ? "search__count--focused" : "search__count--initial"}`}>
                {picksProgress
                    ?   `${5 - nominations.length} pick${nominations.length === 4 ? " " : "s"} remaining`
                    :   "Nominations Complete"
                }
            </span>
            {hasContent
                ?   <img 
                        className="search__clear"
                        src={Cancel}
                        alt="Clear Search Icon"
                        onClick={() => resetSearch()}
                    />
                :   <></>
            }
        </form>
    );
}

export default SearchBar;