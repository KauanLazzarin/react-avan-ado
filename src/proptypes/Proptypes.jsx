import React from 'react';
import PropTypes from 'prop-types';

export default function PropType (props) {
    return (
        <div>
            <h1 style={{color: `${props.color}`}}>{props.headText}</h1>
            <p style={{color:`${props.color}`}}>{props.paragraphText}</p>
        </div>
    )
};

PropType.propTypes = {
    color: PropTypes.string,
    headText: PropTypes.string,
    paragraphText: PropTypes.number
};