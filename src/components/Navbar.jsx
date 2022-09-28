import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">PRyo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/contatti">Contatti</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about">About</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Esercizi
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/esercizio/1">Esercizio 1</a></li>
                                <li><a className="dropdown-item" href="/esercizio/2">Esercizio 2</a></li>
                                <li><a className="dropdown-item" href="/esercizio/3">Esercizio 3</a></li>
                                <li><a className="dropdown-item" href="/esercizio/4">Esercizio 4</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar