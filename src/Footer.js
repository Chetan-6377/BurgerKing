import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container text-center">
                    <h1 className="main-heading"> FOLLOW US ON</h1>
                    <div className=" row justify-content-center">
                        <div className="col-md-4">
                            <a href=""><i className="  fa-2x fab fa-youtube "></i></a>
                            <a href=""><i className="  fa-2x fab fa-instagram "></i></a>
                            <a href=""><i className="  fa-2x fab fa-twitter "></i></a>
                            <a href=""><i className="  fa-2x fab fa-facebook "></i></a>
                            <a href=""><i className="  fa-2x fab fa-linkedin "></i></a>
                        </div>
                    </div>
                    <p className="fs-4 main-para">@2021 BURGER HARBOUR ALL RIGHTS RESERVED.</p>
                </div>
            </section>
        </>
    )
}

export default Footer
