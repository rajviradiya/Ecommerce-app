import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav2 from './Nav/Nav2'
import Firstpage from './Firstpage/Firstpage'
import PhonesPage from './Fiilter/PhonesPage'
import HomeProductpage from './Fiilter/HomeProductpage'
import Laptop from './Fiilter/Laptop'
import Fragrances from './Fiilter/Fragrances'
import SkinCare from './Fiilter/SkinCare'
import ProductPage from './ProductPage/ProductPage'
const Rout = ({db,setDb}) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav2 db={db} setDb={setDb}/>} >
                        <Route index element={<Firstpage db={db} setDb={setDb}/>}/>   
                        <Route path='phone' element={<PhonesPage db={db} setDb={setDb}/>}/>   
                        <Route path='homeproduct' element={<HomeProductpage db={db} setDb={setDb}/>}/>
                        <Route path='laptop' element={<Laptop db={db} setDb={setDb}/>}/>
                        <Route path='fragrances' element={<Fragrances db={db} setDb={setDb}/>}/>
                        <Route path='skincare' element={<SkinCare db={db} setDb={setDb}/>}/>
                        <Route path='productpage/:id' element={<ProductPage db={db} setDb={setDb}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Rout