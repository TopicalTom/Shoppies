import React, {useState, useContext, useEffect} from 'react';
import { NomContext } from "../../hooks/useContext";
import "./Banner.scss"

const Banner = () => {
    const {nominations} = useContext(NomContext);
    const [showBanner, setShowBanner] = useState(false);

    // Displays Banner when Nominations reach 5
    useEffect(() => {
        (nominations.length >= 5
            ?   setShowBanner(true)
            :   setShowBanner(false)
        )
    }, [nominations]); // Updates on Nomination Change

    return (
        <article className={`banner${showBanner ? "--active" : "--inactive"}`}>
            <div className="banner__container">
                <h3 
                    className="banner__header">
                    Details Here
                </h3>
            </div>
        </article>
    );
}

export default Banner;