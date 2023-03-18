import React from 'react'
import { Navbarr, Hero, Projects, Tech, Footer } from './containers';


const App = () => {
    return (
        <div className="App w-full gradient__bg2">
            <div className="gradient__bg w-full md:h-[100vh]">
                <Navbarr />
                <Hero />
            </div>
            <Projects />
            <div className="bg-whitebg">
                <Tech />
                <Footer />
            </div>
        </div>
    )
}

export default App