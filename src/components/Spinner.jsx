import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-border text-primary" role="status"
            style={{
                position: `absolute`,
                width: 64,
                height: 64,
                top: `calc(50% - 32px)`,
                left: `calc(50% - 32px)`,
            }}
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;
