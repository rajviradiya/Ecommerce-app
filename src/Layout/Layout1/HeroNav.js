import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const HeroNav = ({ db, setDb, cartdb, setCartdb }) => {

    const [inputval, setInputval] = useState("")
    console.log(inputval, "search")

    const handleInput = (element) => {
            setInputval(element.value.toLowerCase())
            const data = db.filter((item) => {
                return item.title.toLowerCase().includes(element.value.toLowerCase())
            })
            setDb(data)
    }

    const handleSearch = () => {
        const data = db.filter((item) => {
            return item.title.toLowerCase().includes(inputval)
        })
        setDb(data)
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
                        value={inputval}
                        onChange={(e) => { handleInput(e.target) }}
                    />
                    <Button variant="outline-success" className='navsearchbtn' onClick={() => { handleSearch() }}>Search</Button>
                </Form>
                <div>
                    <Link to="/cart"><button className=' p-2 me-5 bg-transparent shadow-lg'><i className="fa-solid fa-cart-shopping text-white "></i></button></Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default HeroNav