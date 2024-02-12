import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const CatagoryCard = ({ db, setDb }) => {
    return (
        <>
            {Array.isArray(db) ? (
                db.map((val,index) => {
                    return (
                        <>
                            <Card key={index} className='catagoryCard mt-4'>
                               <Link to={`/productpage/:${val.id}`}><Card.Img  className='Catcardimg' variant="top" src={`${val.images[1]}`} /></Link> 
                                <Card.Body className='Catcardbody'>
                                    <Card.Title className='Catcardtitle'>{val.title}</Card.Title>
                                    <Card.Text>
                                        {val.rating}
                                    </Card.Text>
                                    <Card.Text className=' d-flex gap-1'>
                                        {/* <div>Deal</div><br/>
                                        <div className='ps-1'>{val.discountPercentage}%</div> */}
                                        <div className='ps-1 fs-3   '>${val.price}</div>
                                        <div className='ps-2 pt-3'>({val.discountPercentage}% off)</div>
                                    </Card.Text>
                                    <Card.Text>
                                        Save extra with No Cost EMISave extra with No Cost EMI
                                    </Card.Text>
                                    <Card.Text>
                                        FREE delivery
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })
            ) : (<>This is not an array</>)
            }
        </>
    )

}
