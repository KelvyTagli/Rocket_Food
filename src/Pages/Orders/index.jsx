import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";

import { Container, Request, Orders, Payment } from './styles';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { CardCredit } from '../../Components/Payment';
import { InfoOrders } from '../../Components/List_Orders';

export function Order() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storageCart = localStorage.getItem('@rocketfood:Produtos');
        if (storageCart) {
            setCart(JSON.parse(storageCart));
        }
    }, []);

    function handleRemoveItem(id) {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('@rocketfood:Produtos', JSON.stringify(updatedCart));
    }

    const total = cart.reduce((acc, item) => {
        const price = Number(String(item.price).replace(',', '.'));
        return acc + (price * item.quantity);
    }, 0);

    return (
        <Container>
            <Header />
            <Orders>
                <Link to="/Rocket_Food/" className="Button_Back">
                    <CaretLeft size={30} />Voltar
                </Link>     

                <Request>
                    <h1>Meu pedido</h1>
                    <div className='info_orders'>
                        {cart.length > 0 ? (
                            cart.map(item => (
                                <InfoOrders 
                                    key={String(item.id)} 
                                    data={item} 
                                    onRemove={handleRemoveItem} 
                                />
                            ))
                        ) : (
                            <p style={{ marginTop: '20px' }}>O carrinho está vazio.</p>
                        )}
                        
                        <h1 className='price'>
                            Total: R$ {total.toFixed(2).replace('.', ',')}
                        </h1>
                    </div>
                </Request>

                <Payment>
                    <h1>Pagamento</h1>
                    <CardCredit />
                </Payment>
            </Orders>
            <Footer />
        </Container>
    );
}
