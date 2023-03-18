import React from 'react'
import { Navbar, Hero, Projects, Tech, Footer } from './containers';
import "./App.css"

const App = () => {
    return (
        <div className="App w-full gradient__bg2">
        <div className="gradient__bg w-full md:h-[100vh]">
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