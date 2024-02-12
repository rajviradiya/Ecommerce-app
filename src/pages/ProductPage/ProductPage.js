import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductPage = ({ db, setDb }) => {
    const dataid = useParams("")


    console.log(dataid, "data id is")
    return (
        <Container>
            
        </Container>
    )
}

export default ProductPage