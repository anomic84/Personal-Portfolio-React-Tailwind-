import React from 'react'
import { Navbarr, Heror, Projectsr, Techr, Footerr, Contact, Contoct } from './containers';


const App = () => {
    return (
        <div className="App w-full gradient__bg2">
            <div className="gradient__bg w-full md:h-[100vh]">
                <Navbarr />
                <Heror />
            </div>
            <Projectsr />
            <div className="bg-whitebg">
                <Techr />
                {/* <Contact /> */}
                <Contoct />
                <Footerr />
            </div>
        </div>
    )
}

export default App