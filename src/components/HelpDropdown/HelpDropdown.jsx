import React, { useState } from 'react';
import './HelpDropdown.scss';

// Assets
import Info from "../../assets/icons/Information.svg";

function HelpDropdown(props) {
    const {details} = props
    const [showHelp, setShowHelp] = useState(false);

    function openDropdown() {
        setShowHelp(true)
    }

    function closeDropdown() {
        setShowHelp(false)
    }

    return (
        <div className="help">
            <img 
                className="help__icon" 
                src={Info}
                onMouseEnter={() => openDropdown()}
                onMouseLeave={() => closeDropdown()}
                />
            {showHelp
                ?   <div className="help__dropdown">
                        <span 
                            className="help__information">
                            {details}
                        </span>
                    </div>
                :   <></>
            }
        </div>
    );
}

export default HelpDropdown;