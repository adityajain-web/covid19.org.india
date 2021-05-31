import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (<>
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 col-md-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-dark border-bottom">
                            <NavLink exact to="/" className="navbar-brand text-light">Live Covid19 Tracker</NavLink>
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarMenu">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item mr-2"><NavLink activeClassName="acivePage" exact to="/" className="nav-link">Statistics</NavLink></li>
                                    <li className="nav-item mr-2"><NavLink activeClassName="acivePage" exact to="/Symptoms" className="nav-link">Symptoms</NavLink></li>
                                    <li className="nav-item mr-2"><NavLink activeClassName="acivePage" exact to="/BookATest" className="nav-link">Test</NavLink></li>
                                    <li className="nav-item mr-2"><NavLink activeClassName="acivePage" exact to="/Vaccination" className="nav-link">Vaccination</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>)
}

export default Header;