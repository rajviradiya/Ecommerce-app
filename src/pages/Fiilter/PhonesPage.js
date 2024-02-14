import React, { useEffect, useState } from 'react'
import { CatagoryCard } from '../Firstpage/Component/CatagoryCard'
import { Container } from 'react-bootstrap'

const PhonesPage = ({ db, setDb }) => {
    const [newdb, setnewdb] = useState([])

    useEffect(() => {
        const newdata = db.filter((items) => {
            return items.category === "smartphones"
        })
        setnewdb(newdata)
    })
    return (
        <Container fluid>
        <CatagoryCard db={newdb} setDB={setnewdb}/>
        </Container>
        )
}

export default PhonesPage