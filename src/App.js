import React, { useState, useEffect } from 'react';
import { NomContext } from './hooks/useContext';
import './App.css';

// Pages
import Main from "./pages/Main/Main";

// Components
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
    const savedData = JSON.parse(localStorage.getItem("nominations")) || [];
    const [nominations, setNominations] = useState(savedData);
    const [showBanner, setShowBanner] = useState(false);

    function closeBanner() {
        setShowBanner(false)
    }

    // Displays Banner when Nominations reach 5
    useEffect(() => {
        (nominations.length >= 5
            ?   setShowBanner(true)
            :   setShowBanner(false)
        )
    }, [nominations]); // Updates on Nomination Change

    return (
        <NomContext.Provider value={{ nominations, setNominations }}>
            {showBanner
                ?   <>
                        <Banner closeBanner={closeBanner}/>
                        <div className="overlay" closeBanner={closeBanner}/>
                    </>
                :   <></>
            }
            <Header />
            <Main />
        </NomContext.Provider>
    );
}

export default App;
