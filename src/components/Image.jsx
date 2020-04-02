import React from 'react';

const Image = props => {
    return (
        <>
           <img src={props.src} alt={props.desc} className={props.className} /> 
        </>
    );
}

export default Image;