import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import Cart from '../../pages/Cart/Cart';

const HeroNav = ({ db, setDb }) => {

    const [products, setProducts] = useState([]);
    const [inputval, setInputval] = useState("")

    console.log(products, "search")
    useEffect(() => {
        setProducts(db)
    })

    const handleInput = (element) => {
        setInputval(element.value.toLowerCase()
        )
    }

    const handleSearch = () => {
        const data = products.filter((item) => {
            return item.title.toLowerCase().includes(inputval)
        })
        setDb(data)
    }

    const handleOnclick = ()=>{
      
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary heronav">
            <Container fluid>
                <Navbar.Brand className=' text-white' href="#">Navbar scroll</Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 "
                        aria-label="Search"
                        onChange={(e) => { handleInput(e.target) }}
                    />
                    <Button variant="outline-success" className='navsearchbtn' onClick={() => { handleSearch() }}>Search</Button>
                </Form>
                <div>
                    <button onClick={()=>{handleOnclick()}}><i className="fa-solid fa-cart-shopping text-danger pe-4 "></i></button>
                </div>
            </Container>
        </Navbar>
    )
}

export default HeroNav