import React from 'react'

const Menu = () => {
    return (
        <>
            <section className="menu container-fluid">
                <div className="row" >
                    <div className=" col-lg-7 col-md-7 col-sm-12 our_menu">
                        <div >
                            <h1 className="main-heading">Let's Checkout Our Big Family Menu!</h1>
                        </div>
                        <div>
                            <p className="main-para">"Just Have Our Fries With Tikka Paneer Makhani Pizza and Cold Drink" </p>
                        </div>
                        <div className="home_btn ">
                            <div className="left my-4">
                                <a href=""><button type="button" className=" main-btn btn-warning"> Our Menu</button> </a>
                            </div>
                            <div className="right my-4">
                                <a href=""><button type="button" className=" main-btn btn-warning"> Download Menu</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-0 col-lg-5 col-md-5 col-sm-12 menu_img">
                        <img src="https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-100 h-100" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
