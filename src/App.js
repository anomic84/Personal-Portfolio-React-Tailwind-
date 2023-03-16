import React from 'react'
import { Navbar, Hero, Projects, Tech, Footer } from './containers';
import "./App.css"

const App = () => {
    return (
        <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Hero />
        </div>
        <Projects />
        <div className="">
        <Tech />
        <Footer />
        </div>
    </div>
    )
}

export default App