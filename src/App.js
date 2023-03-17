import React from 'react'
import { Navbar, Hero, Projects, Tech, Footer } from './containers';
import "./App.css"

const App = () => {
    return (
        <div className="App w-full">
        <div className="gradient__bg w-full h-[100vh]">
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