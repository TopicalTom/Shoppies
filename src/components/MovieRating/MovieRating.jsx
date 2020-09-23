import React from 'react';
import "./MovieRating.scss"

const MovieRating = (props) => {
    const {rating} = props

    return (
        <div className="rating">
            <div className="rating__upper">
                <div className="rating__star" style={{width: (rating*10/2) + "%"}}/>
                <div className="rating__star" style={{width: rating*10 + "%"}}/>
                <div className="rating__star" style={{width: rating*10 + "%"}}/>
                <div className="rating__star" style={{width: rating*10 + "%"}}/>
                <div className="rating__star" style={{width: rating*10 + "%"}}/>
            </div>
            <div className="rating__lower">
                <div className="rating__star" />
                <div className="rating__star" />
                <div className="rating__star" />
                <div className="rating__star" />
                <div className="rating__star" />
            </div>
        </div>
    );
}

export default MovieRating;