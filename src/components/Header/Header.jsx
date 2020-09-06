import React from 'react';
import './Header.scss';

// Assets
import ShoppiesLogo from "../../assets/logos/ShoppiesLogo.svg";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";

function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__section">
                    <img 
                        className="header__logo"
                        alt="Shoppies Logo"
                        src={ShoppiesLogo}
                    />
                    <div className="header__wordmark">
                        <span 
                            className="header__pretext">
                            The
                        </span>
                        <h1 
                            className="header__title">
                            Shoppies
                        </h1>
                    </div>
                </div>
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;