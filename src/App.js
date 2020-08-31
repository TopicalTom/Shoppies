import React, { useState, useEffect } from 'react';
import { NomContext } from './hooks/useContext';
import './App.css';

//Components
import Main from "./pages/Main/Main";
import Banner from "./components/Banner/Banner";

function App() {
    const local = JSON.parse(localStorage.getItem("nominations"));
    const [nominations, setNominations] = useState(local);

    return (
        <NomContext.Provider value={{ nominations, setNominations }}>
            <Banner />
            <Main />
        </NomContext.Provider>
    );
}

export default App;
