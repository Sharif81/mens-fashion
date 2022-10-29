import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Order from '../Order/Order';
import './Orders.css'
import OrderSummary from '../OrderSummary/OrderSummary';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Orders = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    useEffect( () => {
        const storeCart = getStoredCart();
        const saveCart = [];
        for (const id in storeCart){
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }           
        }
        setCart(saveCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exits = cart.find(product => product.id === selectedProduct.id)
        if(!exits){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
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