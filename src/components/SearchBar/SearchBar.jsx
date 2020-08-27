import React from 'react';
import './SearchBar.scss';

function SearchBar({handleInput}) {

    return (
        <input 
            className="search"
            placeholder="Search"
            name="search"
            id="search"
            type="text"
            onChange={handleInput} 
        />
    );
}

export default SearchBar;