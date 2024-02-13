import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


const ProductPage = ({ db, setDb }) => {
    const [newdata, setNewdata] = useState([])
    const dataid = useParams("")

    const navigate = useNavigate();

    useEffect(() => {
        const data = db.filter((item) => {
            return item.id == dataid.id
        })
        setNewdata(data)
    }, [])

    const handleAddtoCart = ()=>{
        navigate("/cart")
    }
    return (
        <>
            {Array.isArray(newdata) ? (
                newdata.map((val) => {
                    return (
                        <>
                            <Container fluid>
                                <Row>
                                    <Col xl={6} lg={6} md={12} sm={12} className="p-0 productscarosal">
                                        <Carousel data-bs-theme="dark">
                                            <Carousel.Item className='produccarosalimg'>
                                                <img
                                                    className="d-block w-100"
                                                    src={`${val.images[1]}`}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='produccarosalimg'>
                                                <img
                                                    className="d-block w-100"
                                                    src={`${val.images[2]}`}
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='produccarosalimg'>
                                                <img
                                                    className="d-block w-100"
                                                    src={`${val.images[3]}`}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='produccarosalimg'>
                                                <img
                                                    className="d-block w-100"
                                                    src={`${val.images[4]}`}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='produccarosalimg'>
                                                <img
                                                    className="d-block w-100"
                                                    src={`${val.images[5]}`}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col xl={6} lg={6} md={12} sm={12} className="p-0 productsbody">
                                        <Row>
                                            <div><h2>{val.title}</h2></div>
                                            <div><h5>{val.brand}</h5></div>
                                            <div><Rating name="read-only" value={`${val.rating}`} readOnly /></div>
                                            <div>
                                                <h5 className='productdeals'>Deal</h5>
                                                <div className='d-flex gap-3'>
                                                    <h3 className=' text-danger'>12%</h3>
                                                    <h3>${val.price}</h3>
                                                </div>
                                            </div>
                                            <div className='mb-3 mt-2'>Inclusive of all taxes EMI starts at $2.</div>
                                            <div><h6 className='m-0'>About this item</h6>{val.description}</div>
                                            <div className=' text-success mt-2'><h6>in Stock</h6></div>
                                            <ol className=' d-flex'>
                                                <li className='productpageli'>
                                                    <div>
                                                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" />
                                                        <span>7 days Replacement </span>
                                                    </div>
                                                </li>
                                                <li className='productpageli'>
                                                    <div>
                                                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" />
                                                        <span> Free Delivery  </span>
                                                    </div>
                                                </li>
                                                <li className='productpageli'>
                                                    <div>
                                                        <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" />
                                                        <span> Top Brand  </span>
                                                    </div>
                                                </li>
                                            </ol>
                                            <button className='productpagebtn' onClick={()=>{handleAddtoCart()}}>Add to cart</button>
                                            <button className='productpagebtn ms-4'>Buy Now</button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                })
            ) : (<h1>Data not comming</h1>)

            }
        </>
    )
}

export default ProductPage