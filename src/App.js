import React from 'react'
import About from './About'
import Caraosel from './Caraosel'
import Deals from './Deals'
import Footer from './Footer'
import Membership from './Membership'
import Menu from './Menu'
import Nav from './Nav'

const App = () => {
    return (
        <>
        <Nav/>
        <Caraosel/>
        <Deals/>
        <Menu/>
        <Membership/>
        <About/>
        <Footer/>
        </>
    )
}

export default App
