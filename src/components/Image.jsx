import React from 'react';

const Image = props => {
    return (
        <>
           <img src={props.src} alt={props.desc} class="quick--link-icon" /> 
        </>
    );
}

export default Image;