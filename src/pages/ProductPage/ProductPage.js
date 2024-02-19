import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

import { getdata } from '../../Utils/axios';

const ProductPage = ({ db, setDb, cartdb, setCartdb }) => {

    const [newdata, setNewdata] = useState([]);
    const [counters, setCounters] = useState(0);
    const [pageid, setpageId] = useState(1)

    const { id } = useParams("");
    //pase detail page data using routing
    const navigate = useNavigate();

    console.log(newdata.length > 0 ? newdata[0].id : null, "product111");


    //set state using passed props 
    useEffect(() => {
        const data = db.filter((item) => {
            if (item.id == id) {
                setpageId(item.id)
            }
            return item.id == id
        })
        setNewdata(data)
    }, [db])

    // cart data for qty
    // useEffect(() => {
    //     cartdb.forEach((item) => {
    //         console.log(item.products[item.id], "nre cart")
    //     });

    // }, [])

    const handleDecrement = (id) => {
        if (id == pageid && counters > 0) {
            console.log(id, "this is id  ")
            setCounters(counters - 1)
            updateCart(id, counters)
        }
    }

    const handleIncreament = (id) => {
        if (id == pageid && counters < 10) {
            console.log(id, "this is id  ")
            setCounters(counters + 1)
            updateCart(id, counters)
        }
    }

    //post cart data....
    const handleAddtoCart = (id, quantity) => {
        if (newdata && newdata.length > 0) {
            navigate("/cart")
            newdata.forEach((val) => {
                const productInCart = cartdb.find(item => item.products.some(p => p.id === val.id));
                if (!productInCart) {
                    const postdata = {
                        "id": `${val.id}`,
                        "products": [
                            {
                                "id": `${val.id}`,
                                "title": `${val.title}`,
                                "price": `${val.price}`,
                                "quantity": counters,
                                "total": 60,
                                "discountPercentage": `${val.discountPercentage}`,
                                "discountedPrice": 55,
                                "thumbnail": `${val.thumbnail}`
                            }
                        ],
                        "total": 2328,
                        "discountedTotal": 1941,
                        "userId": 97,
                        "totalProducts": 5,
                        "totalQuantity": 10
                    }
                    getdata.cartpost(postdata)
                    setCartdb(prevData => [...prevData, postdata]);
                } else {
                    console.log(`Product with ID ${val.id} already exists in the cart.`);
                }
            })
        }
    }

    const updateCart = (id, quantity) => {
        console.log(id, "counter....................", quantity + 1)
        newdata.map((val) => {
            const obj = {
                "id": `${val.id}`,
                "products": [
                    {
                        "id": `${val.id}`,
                        "title": `${val.title}`,
                        "price": `${val.price}`,
                        "quantity": quantity + 1,
                        "total": 60,
                        "discountPercentage": `${val.discountPercentage}`,
                        "discountedPrice": 55,
                        "thumbnail": `${val.thumbnail}`
                    }
                ],
                "total": 2328,
                "discountedTotal": 1941,
                "userId": 97,
                "totalProducts": 5,
                "totalQuantity": 10
            }
            getdata.cartpatch(id, obj)
                .then((res) => {
                    console.log(res.data, "cart2");
                })
                .catch((err) => {
                    console.log(err);
                });
        })
    }

    //cart data for qty
    // useEffect(() => {
    //     getdata.cart()
    //         .then((res) => {
    //             console.log(res.data,"res")
    //             const newCounters = {};
    //             res.data.forEach((item) => {
    //             newCounters[item.id] = item.products[0].quantity;
    //             });
    //             setCounters(newCounters);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    


    return (
        <>
            {Array.isArray(newdata) ? (
                newdata.map((val, index) => {
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
                                                    <button onClick={() => handleDecrement(val.id)}>-</button>
                                                    <div>{counters}</div>
                                                    <button onClick={() => handleIncreament(val.id)}>+</button>
                                                </div>
                                                <button className='productpagebtn' onClick={() => { handleAddtoCart(val.id, counters) }}>Add to cart</button>
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