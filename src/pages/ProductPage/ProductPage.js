import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

import { getdata } from '../../Utils/axios';

const ProductPage = ({ db, setDb }) => {
    const [newdata, setNewdata] = useState([]);
    const [counters, setCounters] = useState([]);
    const dataid = useParams("");

    console.log(newdata,"awewqedwqewqe")
    //pase detail page data using routing
    const navigate = useNavigate();

    //set state using passed props 
    useEffect(() => {
        const data = db.filter((item) => {
            return item.id == dataid.id
        })
        setNewdata(data)
    }, [])

    //cart data for qty
    useEffect(() => {
        getdata.cart()
            .then((res) => {
                res.data.map((item)=>{
                    setCounters(item.products[0].quantity)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    
     // Initialize counters array with initial values
     useEffect(() => {
        const initialCounters = newdata.map(() => 0);
        setCounters(initialCounters);
        console.log(initialCounters, "Sedrfswdrf")
    }, []);

     //cart contity inc
     const handleDecrement = (index) => {
        if (counters[index] > 0) {
            const updatedCounters = [...counters];
            updatedCounters[index] = counters[index] - 1;
            setCounters(updatedCounters)
        }
    }
    //cart contity dec
    const handleIncreament = (index) => {
        if (counters[index] < 10) {
            const updatedCounters = [...counters];
            updatedCounters[index] = counters[index] + 1;
            setCounters(updatedCounters)
        }
    }

    //post cart data....
    const handleAddtoCart = () => {
        console.log(newdata[0], "data page is like")
        if (newdata) {
            navigate("/cart")
            let postdata = {
                "id": newdata[0].id,
                "products": [
                    {
                        "title": newdata[0].title,
                        "price": newdata[0].price,
                        "quantity": counters,
                        "total": 60,
                        "discountPercentage": newdata[0].discountPercentage,
                        "discountedPrice": 55,
                        "thumbnail": newdata[0].thumbnail
                    }
                ],
                "total": 2328,
                "discountedTotal": 1941,
                "userId": 97,
                "totalProducts": 5,
                "totalQuantity": 10
            }
            getdata.cartpost(postdata)
        }
    }

    return (
        <>
            {Array.isArray(newdata) ? (
                newdata.map((val,index) => {
                    return (
                        <>
                            <Container fluid key={index}>
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
                                        <Row className='productsbody2'>
                                            <div><h2>{val.title}</h2></div>
                                            <div><h5>{val.brand}</h5></div>
                                            <div><Rating name="read-only" value={`${val.rating}`} readOnly /></div>
                                            <div>
                                                <h5 className='productdeals'>Deal</h5>
                                                <div className='d-flex gap-3'>
                                                    <h3 className=' text-danger'>{val.discountPercentage}%</h3>
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

                                            <div className='productpagecarqty'>
                                                <div>
                                                    <button onClick={() => handleDecrement(index)}>-</button>
                                                    <div>{counters[index]}</div>
                                                    <button onClick={() => handleIncreament(index)}>+</button>
                                                </div>
                                                <button className='productpagebtn' onClick={() => { handleAddtoCart() }}>Add to cart</button>
                                                <button className='productpagebtn'>Buy Now</button>
                                            </div>
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