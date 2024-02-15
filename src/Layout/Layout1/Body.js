import React from 'react'
import Rout from '../../pages/Rout'

const Body = ({db,setDb, cartdb, setCartdb}) => {
    return (
        <>
            <Rout db={db} setDb={setDb}  cartdb={cartdb} setCartdb={setCartdb}/>
        </>
        )
}

export default Body