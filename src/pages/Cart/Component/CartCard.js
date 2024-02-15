import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { getdata } from '../../../Utils/axios';

const CartCard = ({ data, setcartdb }) => {
    const [counters, setCounters] = useState([]);
    const [cartdata, setCartdata] = useState([])

    console.log(cartdata, "cartcard data ")
    //cartda get and set to state
    useEffect(() => {
        setCartdata(data)
    }, [data])

    // Initialize counters array with initial values
    useEffect(() => {
        const initialCounters = data.map(() => 0);
        setCounters(initialCounters);
        console.log(initialCounters, "Sedrfswdrf")
    }, [data]);

    //cart contity inc
    const handleDecrement = (index) => {
        console.log(index, "index is this ")
        if (counters[index] > 0) {
            const updatedCounters = [...counters];
            updatedCounters[index] = counters[index] - 1;
            updateCart(index, updatedCounters[index]);
            setCounters(updatedCounters)
        }
    }
    //cart contity dec
    const handleIncreament = (index) => {
        if (counters[index] < 10) {
            const updatedCounters = [...counters];
            updatedCounters[index] = counters[index] + 1;
            updateCart(index, updatedCounters[index]);
            setCounters(updatedCounters)
        }
        console.log(index, counters[index] + 1, "index counter")
    }

    const updateCart = (index, quantity) => {
        console.log(index, quantity, "qqtyu")
        const obj = { // Construct the object to be sent in the request
            "id": "1",
            "products": [
                {
                    "id": data[index].id,
                    "title": data[index].title,
                    "price": data[index].price,
                    "quantity": quantity,
                    "total": data[index].total,
                    "discountPercentage": data[index].discountPercentage,
                    "discountedPrice": data[index].discountedPrice,
                    "thumbnail": data[index].thumbnail
                }
            ],
            "total": data.reduce((acc, item) => acc + item.total, 0), 
            "discountedTotal": data.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0), 
            "userId": 97,
            "totalProducts": data.length,
            "totalQuantity": data.reduce((acc, item) => acc + item.quantity, 0) 
        };

        getdata.cartpatch(index + 1, obj)
            .then((res) => {
                console.log(res.data, "cart2");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //    delete function
    const handleDelete = (id) => {
        getdata.cartdelete(id).then((res) => {
            const updatedCartData = cartdata.filter(item => item.id !== id);
            console.log(updatedCartData, "updated data")
            setcartdb(updatedCartData)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {
                Array.isArray(cartdata) ? (
                    cartdata.map((items, index) => {
                        return (
                            <>
                                <Card key={index} className='cartcard mt-2'>
                                    <Card.Img variant="top" src={`${items.products[0].thumbnail}`} className='cartcardimg' />
                                    <Card.Body >
                                        <Card.Text className='cartcardbody'>
                                            <p>{items.products[0].title}</p>
                                            <div>
                                                <button onClick={() => { handleDecrement(index) }}>-</button>
                                                <div>{counters[index]}</div>
                                                <button onClick={() => { handleIncreament(index) }}>+</button>
                                            </div>
                                            <span>${items.products[0].price}</span>
                                            <Button className='btn btn-danger' onClick={() => { handleDelete(items.id) }}><i class="fa-solid fa-trash"></i></Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <hr />
                            </>
                        )
                    })
                ) : (<h1>Data not found</h1>)
            }
        </>
    )
}

export default CartCard