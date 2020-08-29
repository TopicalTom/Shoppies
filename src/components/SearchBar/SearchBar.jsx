import React, {useState, useLayoutEffect} from 'react';
import './SearchBar.scss';

import Search from "../../assets/icons/Search.svg";
import Cancel from "../../assets/icons/Cancel.svg";

function SearchBar(props) {

    const {handleChange, resetValue, searchParams, length, count} = props
    const [picksProgress, setPicksProgress] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    // Updates UI Based on Search Field Input
    useLayoutEffect(() => {
        (length > 0 
            ? setHasContent(true)
            : setHasContent(false)
        )
    }, [searchParams]);

    // Offers Help Text Based on Remaining Nominations
    useLayoutEffect(() => {
        (count !== 0 
            ? setPicksProgress(`${5 - count} pick${count === 4 ? " " : "s"} remaining`)
            : setPicksProgress("Nominate 5 Movies")
        )
    }, [count]);

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
                onChange={handleChange}
            />
            <span 
                className={`search__count ${hasContent ? "search__count--focused" : "search__count--initial"}`}>
                {picksProgress}
            </span>
            {hasContent
                ?   <img 
                        className="search__clear"
                        src={Cancel}
                        onClick={resetValue}
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