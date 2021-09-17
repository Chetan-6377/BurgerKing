import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <section className="navbar-bg">
                <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                    <div class="container">
                        <a href="" className="navbar-brand">Burger King</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Our Plans</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Buy Membership</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">My Card</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Nav
