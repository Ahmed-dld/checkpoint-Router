import React from 'react';
import {  Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="not_found_container">
            <div style={{color:'white'}} >Sorry :(</div>
            <div style={{color:'white'}}> PAGE NOT FOUND</div>
            <Link to="/"> CLICK HERE TO GO BACK</Link>
        </div>
    );
};

export default Notfound;