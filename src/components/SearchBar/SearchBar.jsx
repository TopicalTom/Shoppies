import React, { useContext, useState, useEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import './SearchBar.scss';

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
    }, [searchParams]);

    // Offers Helper Text Based on Remaining Nominations
    useEffect(() => {

        if(nominations) {
            (nominations.length !== 0 
                ? setPicksProgress(true)
                : setPicksProgress(false)
            )
        }
    }, [nominations]);

    return (
        <article className="search">
            <img 
                className="search__icon" 
                src={Search}
                alt="Search Icon"
            />
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
                    :   "Nominate 5 Movies"
                }
            </span>
            {hasContent
                ?   <img 
                        className="search__clear"
                        src={Cancel}
                        onClick={resetSearch}
                    />
                :   <></>
            }
        </article>
    );
}

export default SearchBar;

/*
            <span 
                className="search__count">
                {picksProgress}
            </span>

*/