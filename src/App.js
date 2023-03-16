import React from 'react'
import { Navbar, Header, Projects, Tech, Footer } from './containers';
import "./App.css"

const App = () => {
    return (
        <div className="App">
        <div className="">
            <Navbar />
            <Header />
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