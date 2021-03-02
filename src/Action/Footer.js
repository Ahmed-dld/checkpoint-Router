import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer" >
                <h6>&copy; Copyright @ 2009-2018-Tous droits réservés </h6>
                <Link to='/'style={{color:'red'}} >Accueil</Link>
            </div>
        )
    }
}
export default Footer 