import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav2 from './Nav/Nav2'
import Firstpage from './Firstpage/Firstpage'

const Rout = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav2 />} >
                        <Route index element={<Firstpage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Rout