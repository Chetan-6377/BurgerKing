import React from 'react'

const Caraosel = () => {
    return (
        <>
            <section className="carousel-div">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div className="hero-section hero-img-1 ">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8 text-center">
                                            <h1 className="main-heading">
                                                LET THE GREAT TASTE BEGIN
                                            </h1>
                                            <p className="main-para">
                                                " Slice the up our royal taste "
                                            </p>
                                            <div className="my-5">
                                                <a href="#"><button className="main-btn bg-warning">MENU</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className="hero-section hero-img-2 ">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8 text-center">
                                            <h1 className="main-heading">
                                                BEST DESSI DEALS ON BURGER KING <i class="fas fa-hamburger"></i>
                                            </h1>
                                            <div className="my-5">
                                                <a href="#"><button className="main-btn bg-warning">VIEW PLANS</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="hero-section hero-img-3">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8 text-center">
                                            <h1 className="main-heading">JOIN OUR BIG FAMILY KUDOOS!
                                            </h1>
                                            <div className="my-5">
                                                <a href="#"><button className="main-btn bg-warning">MEMBERSHIP</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Caraosel
