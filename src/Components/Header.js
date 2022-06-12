import React from 'react'
import SearchBar from './SearchBar';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className = "logo" src="https://m.media-amazon.com/images/G/01/IMDb/BG_square._CB1509067564_SX350_CR0,0,350,262_AL_.png" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        <SearchBar/>
        </>
    )
}

export default Header;