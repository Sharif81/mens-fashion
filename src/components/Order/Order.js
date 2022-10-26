import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './Order.css'

const Order = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    
    return (
        <div>
            <Row>
                <Col className='mt-4'>
                    <CardGroup style={{height: '650px' }}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body className='body-text'>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text><b>Price: ${price}</b> </Card.Text>
                                <Card.Text className='mt-5'>Manufacturer: {seller}</Card.Text>
                                <Card.Text>Rating: {ratings} Star</Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-warning'>
                                <Button type='button' onClick={ () => props.handleAddToCart(props.product)} variant="warning" className='form-control bg-warning'>Add To Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Order;