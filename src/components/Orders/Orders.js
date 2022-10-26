import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Order from '../Order/Order';
import './Orders.css'
import OrderSummary from '../OrderSummary/OrderSummary';


const Orders = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <Container>
            <Row>
                <Col md={10}>
                    <div className='products-container' >
                        {
                            products.map(product => <Order
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Order>)
                        }
                    </div>
                </Col>


                <Col md={2}>
                    <div>
                       <OrderSummary cart={cart}></OrderSummary>

                       
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;