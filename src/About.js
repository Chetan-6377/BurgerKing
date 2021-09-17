import React from 'react'

const About = () => {
    return (
        <>
            <section className="about">
                <div className=" container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-11">
                            <h3 className="main-heading">ABOUT BURGER KING</h3>
                            <hr />
                            <p className="fs-2 main-para">We serve you freshly made Burger, Pizza, Pasta,
                                Sandwitch, Wraps, Shakes and
                                many more....Customers love to eat and spend their quality time here.Burger King is
                                currently present in Delhi.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-11">
                            <h3 className="main-heading">Important Links</h3>
                            <hr />
                            <ul className="fs-3 links">
                                <li>
                                    <a href="">MENU</a>
                                </li>
                                <li>
                                    <a href="">PLANS</a>
                                </li>
                                <li>
                                    <a href="">MEMBERSHIP</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-11">
                            <h3 className="main-heading">QUICK LINKS</h3>
                            <hr />
                            <ul className="fs-3 quick">
                                <li><a href="">Terms & condition</a></li>
                                <li><a href="">Privacy-Policy</a></li>
                                <li><a href="">Contact-Us</a></li>
                                <li><a href="">About-Us</a></li>
                                <li><a href="">Refund and Cancellation</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-11 touch">
                            <h3 className="main-heading">GET IN TOUCH</h3>
                            <hr />
                            <div className="flex">
                                <div className="left">
                                    <input type=" email" placeholder="ENTER EMAIL" required />
                                </div>
                                <div className="right">
                                    <button className="btn-warning">SEND</button>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="col-lg-2 col-2 service-icons"><i className="text-white fa-2x fa fa-map-marker"></i>
                                </div>
                                <div className="col-lg-10  col-10 service-text">
                                    <p className=" fs-4 text-white">xyz colony near bus stand</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="col-lg-2 col-2 service-icons"><i className=" text-white fa-2x fa fa-envelope"></i>
                                </div>
                                <div className="col-lg-10  col-10 service-text">
                                    <p className=" fs-4 text-white">xyz@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="col-lg-2 col-2 service-icons "><i className=" text-white fa-2x fa fa-phone"></i>
                                </div>
                                <div className="col-lg-10  col-10 service-text">
                                    <p className=" fs-4 text-white">+91 9876543210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
