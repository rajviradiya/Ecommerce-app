import React from 'react'
import Rout from '../pages/Rout'

const Body = ({db,setDb}) => {
    return (
        <>
            <Rout db={db} setDb={setDb}/>
        </>
        )
}

export default Body