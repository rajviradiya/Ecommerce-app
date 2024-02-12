import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const HeroNav = ({ db, setDb }) => {

    const [inputval,setInputval]= useState("")

    useEffect(() => {
        console.log(db, "search")
    })

    const handleInput = (element) => {
        setInputval(element.value.toLowerCase()
        )
    }

    const handleSearch = ()=>{
        const data = db.filter((val)=>{
            return val.title.include(inputval)
        })

        console.log(data)
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary heronav">
            <Container fluid>
                <Navbar.Brand className=' text-white' href="#">Navbar scroll</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 "
                        aria-label="Search"
                        onChange={(e) => { handleInput(e.target) }}
                    />
                    <Button variant="outline-success" className='navsearchbtn' onClick={()=>{handleSearch()}}>Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default HeroNav