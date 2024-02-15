import React, { useEffect, useState } from 'react'
import CartCard from './Component/CartCard'
import { Col, Container, Row } from 'react-bootstrap'

import { getdata } from "../../Utils/axios"

const Cart = () => {

    const [cartdb, setcartdb] = useState([])
    const [err, setErr] = useState("")

    console.log(cartdb, "cart")

    //get cart data
    useEffect(() => {
        getdata.cart().then((res) => {
            setcartdb(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [setcartdb])


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
                        <p>You Have <span>7</span> items in shoping cart</p>
                    </div>
                </Row>
                <Row className='cartcardss'>
                    <div>
                        <CartCard data={cartdb} setcartdb={setcartdb} />
                    </div>
                </Row>
                <Row className='carttotal'>
                    <div>
                        <h5>Cart Total :220rs</h5>
                        <div>
                            <button className='btn btn-primary'>CHECKOUT</button>
                            <button className='btn btn-primary'>CHECKOUT</button>
                        </div>
                    </div>
                </Row>
            </Col>
        </Container>
    )
}

export default Cart