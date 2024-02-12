import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Nav2 = ({ db, setDb }) => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary Nav2">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div>
                                <Link to="/" className='ps-2 nav2link'>All Productss</Link>
                                <Link to="/laptop" className='ps-2 nav2link'>Laptops</Link>
                                <Link to="/phone" className='ps-2 nav2link'>SmartPhone</Link>
                                <Link to="/homeproduct" className='ps-2 nav2link'>HomeDecoration</Link>
                                <Link to="/fragrances" className='ps-2 nav2link'>fragrances</Link>
                                <Link to="/skincare" className='ps-2 nav2link'>skincare</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Nav2