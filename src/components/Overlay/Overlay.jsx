import React from 'react';
import "./Overlay.scss"

const Overlay = (props) => {
    const {closeBanner} = props

    return (
        <div className="overlay" onClick={() => closeBanner()} />
    );
}

export default Overlay;