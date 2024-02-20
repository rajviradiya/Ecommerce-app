import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { getdata } from '../../../Utils/axios';

const CartCard = ({ db, setDb, cartdb, setCartdb }) => {

    const [counters, setCounters] = useState([]);

    console.log(counters, "cartcard data ")

    useEffect(() => {
        const initialCounters = cartdb.map(val => val.products[0].quantity);
        setCounters(initialCounters);
    }, [cartdb]);

    //cart contity inc
    const handleDecrement = (id,index) => {
        if (counters[index] > 0) {
            updateCartCount(index, counters[index] - 1);
            incdecput(id,index, counters[index] - 1)
        }
        console.log(index, counters[index] + 1,id, "dec")
    }
    //cart contity dec
    const handleIncreament = (id,index) => {
        if (counters[index] < 10) {
            updateCartCount(index, counters[index] + 1);
            incdecput(id,index, counters[index] + 1)
        }
        console.log(index, counters[index] + 1,id, "inc")
    }

    const updateCartCount = (index, count) => {
        const updatedCounters = [...counters];
        updatedCounters[index] = count;
        setCounters(updatedCounters);
    }

    const incdecput = (id,index, quantity) => {
        const obj = { // Construct the object to be sent in the request
            "id": id,
            "products": [
                {
                    "id": cartdb[index].id,
                    "title": cartdb[index].title,
                    "price": cartdb[index].price,
                    "quantity": quantity,
                    "total": cartdb[index].total,
                    "discountPercentage": cartdb[index].discountPercentage,
                    "discountedPrice": cartdb[index].discountedPrice,
                    "thumbnail": cartdb[index].thumbnail
                }
            ],
            "total": cartdb.reduce((acc, item) => acc + item.total, 0),
            "discountedTotal": cartdb.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0),
            "userId": 97,
            "totalProducts": cartdb.length,
            "totalQuantity": cartdb.reduce((acc, item) => acc + item.quantity, 0)
        };

        getdata.cartpatch(id, obj)
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
            const updatedCartData = cartdb.filter(item => item.id !== id);
            console.log(updatedCartData, "updated data")
            setCartdb(updatedCartData)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {
                Array.isArray(cartdb) ? (
                    cartdb.map((items, index) => {
                        return (
                            <>
                                <Card key={index} className='cartcard mt-2'>
                                    <Card.Img variant="top" src={`${items.products[0].thumbnail}`} className='cartcardimg' />
                                    <Card.Body >
                                        <Card.Text className='cartcardbody'>
                                            <p>{items.products[0].title}</p>
                                            <div>
                                                <button onClick={() => { handleDecrement(items.id,index) }}>-</button>
                                                <div>{counters[index]}</div>
                                                <div>{items.products[0].quantity}</div>
                                                <button onClick={() => { handleIncreament(items.id,index) }}>+</button>
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