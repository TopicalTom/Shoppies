import React, { useState } from 'react';
import { NomContext } from './hooks/useContext';
import './App.css';

//Components
import Main from "./pages/Main/Main";
import Banner from "./components/Banner/Banner";

function App() {
    const savedData = JSON.parse(localStorage.getItem("nominations")) || [];
    const [nominations, setNominations] = useState(savedData);

    return (
        <NomContext.Provider value={{ nominations, setNominations }}>
            <Banner />
            <Main />
        </NomContext.Provider>
    );
}

export default App;
