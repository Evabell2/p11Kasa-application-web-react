import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Apropos from "./pages/Apropos"
import Error404 from "./pages/Error404"
import Lodging from "./pages/Lodging"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import logements from "./data/logements.json"


 
ReactDOM.render(
    <BrowserRouter>

        <Header />

        <Routes>
            <Route path='/' element={<Home logements={logements} />} />
            <Route path='/a-propos' element={<Apropos />} />
            <Route path="/logement/:id" element={<Lodging logements={logements} />} />
            <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />

    </BrowserRouter>,
    document.getElementById("root")
)