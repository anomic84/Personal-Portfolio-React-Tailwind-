import React from 'react'
import { Navbarr, Heror, Projects, Tech, Footer } from './containers';


const App = () => {
    return (
        <div className="App w-full gradient__bg2">
            <div className="gradient__bg w-full md:h-[100vh]">
                <Navbarr />
                <Heror />
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