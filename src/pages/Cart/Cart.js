import React from 'react'
import CartCard from './Card/CartCard'
import { Col, Container, Row } from 'react-bootstrap'


const Cart = () => {
    return (
        <Container fluid className='p-0'>
            <Col className='cart p-0'>
                <Row className='cartback'>
                    <div >
                        <button><i class="fa-solid fa-arrow-left"></i></button>
                        <span>Continue Shoping</span>
                        <hr />
                    </div>
                </Row>
                <Row className='carthead'>
                    <div>
                        <h1>Shopping Cart</h1>
                        <h6>You Have 7 items in shoping cart</h6>
                    </div>
                </Row>
                <Row className='cartcardss'>
                    <div>
                            <CartCard />
                    </div>
                </Row>
                <Row className='carttotal'>
                    <div>
                        <h5>Cart Total :220rs</h5>
                        <button className='btn btn-primary'>CHECKOUT</button>
                    </div>
                </Row>
            </Col>
        </Container>
    )
}

export default Cart