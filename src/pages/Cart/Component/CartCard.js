import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const CartCard = ({ data }) => {
    const [counters, setCounters] = useState([]);

     // Initialize counters array with initial values
    useEffect(() => {
        const initialCounters = data.map(() => 0);
        setCounters(initialCounters);
        console.log(initialCounters, "Sedrfswdrf")
    }, [data]);

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
    return (
        <>
            {
                Array.isArray(data) ? (
                    data.map((items,index) => {
                        return (
                            <>
                                <Card key={index} className='cartcard mt-2'>
                                    <Card.Img variant="top" src={`${items.products[0].thumbnail}`} className='cartcardimg' />
                                    <Card.Body >
                                        <Card.Text className='cartcardbody'>
                                            <p>{items.products[0].title}</p>
                                            <div>
                                                <button onClick={()=>{handleDecrement(index)}}>-</button>
                                                <div>{counters[index]}</div>
                                                {/* <div>{items.products[0].quantity}</div> */}
                                                <button onClick={()=>{handleIncreament(index)}}>+</button>
                                            </div>
                                            <span>${items.products[0].price}</span>
                                            <Button className='btn btn-danger'><i class="fa-solid fa-trash"></i></Button>
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