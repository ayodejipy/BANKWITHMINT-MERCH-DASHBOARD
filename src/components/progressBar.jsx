import React from 'react';

const progressBar = props => {
    return (
        <>
            <div className="progress my-1" style={{ height: '4px' }}>
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}

export default progressBar;
