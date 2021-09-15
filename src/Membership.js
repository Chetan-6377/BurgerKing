import React from 'react'

const Membership = () => {
    return (
        <>
            <section className="membership">
                <div className=" container">
                    <div className="row justify-content-center">
                        <div className=" col-md-7">
                            <div className=" text-center mem_text">
                                <h1 className="main-heading">We Bring Up New Spice Here</h1>
                                <p className="main-para">"Just Have Our Fries With Tikka Paneer Makhani Pizza and Cold Drink" </p>
                                <div><a href=""><button type="button" className="btn-warning main-btn">Get Membership</button></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text_div">
                <div className="quote" style={{
                    backgroundImage: `url("./image/1161695.png")`}}>
                    <div className=" container">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <h1 className="main-heading">" WE BRING UP THE NEW DISHES WITH HIGH VARIETY OF PRODUCTS AND SERVICES "</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Membership
