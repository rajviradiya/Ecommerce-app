import React from 'react'
import { CatagoryCard } from './Component/CatagoryCard'
import { Container } from 'react-bootstrap'

const Firstpage = ({db,setDb}) => {
    return (
       <> 
       <CatagoryCard db={db} setDb={setDb}/>
       </>
    )
}

export default Firstpage