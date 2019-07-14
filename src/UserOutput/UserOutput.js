import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> UserName: {props.userName}</p>
            <p>Another Random Text</p>
            </div>
    );
};

export default UserOutput;