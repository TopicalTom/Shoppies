import React, {useState} from 'react';
import './SearchBar.scss';

import Search from "../../assets/icons/Search.svg";

function SearchBar({handleChange}) {

    const [searchParams, setSearchParams] = useState("")
    const [hasContent, setHasContent ] = useState(false);

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
                onChange={handleChange} 
            />
            {hasContent 
                ? <div className="search__clear" />
                : <></>
            }
        </article>
    );
}

export default SearchBar;