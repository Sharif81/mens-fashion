import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './OrderSummary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OrderSummary = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseInt((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax);
    return (
        <div>
            <Row>
                <Col className='product-summary'>
                    <CardGroup style={{ width: '18rem', height: '600px' }}>
                        <Card bg='warning'>
                            <h4 className='summary-title'>Product Summary</h4>
                            <Card.Body className='body-text mt-4'>
                                <Card.Text>Selected Items: {cart.length} </Card.Text>
                                <Card.Text>Total Price: $ {total} </Card.Text>
                                <Card.Text>Total Shipping Charge: $ {shipping} </Card.Text>
                                <Card.Text>Tax: $ {tax}</Card.Text>
                                <Card.Title>Grand Total: $ {grandTotal}</Card.Title>

                                <Stack gap={3} className="mx-auto mt-5">
                                    <Button type='button' variant="danger">Clear Cart <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon> </Button>
                                    <Button type='button' variant="primary">Order Review <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </Button>
                                </Stack>

                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </div>
    );
};

export default OrderSummary;