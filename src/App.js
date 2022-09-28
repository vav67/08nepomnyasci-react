import React from "react";
import { StrictMode } from 'react'
import {Header} from  './components/Header'
import {Footer} from  './components/Footer'
import {Shop} from  './components/Shop'


function App()  {
    return (
        <StrictMode>
            <React.Fragment>
                <Header/>
         <Shop />
                <Footer/>
            </React.Fragment>
        </StrictMode>
    )
}


export default App;
