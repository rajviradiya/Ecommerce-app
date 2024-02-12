import React from 'react'
import { CatagoryCard } from './Cards/CatagoryCard'
import { Container } from 'react-bootstrap'

const Firstpage = ({db,setDb}) => {
    return (
       <Container fluid> 
       <CatagoryCard db={db} setDb={setDb}/>
       </Container>
    )
}

export default Firstpage