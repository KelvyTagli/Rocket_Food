import { Container, Request, Orders, Payment } from './styles';
import { Header } from '../../Components/Header'
import { Footer} from '../../Components/Footer'
import { InfoOrders } from '../../Components/List_Orders';


export function Order() {
    return(
        <Container>
            <Header/>
            <Orders>
                <Request>
                    <h1>Meu pedido</h1>
                    <div className='info_orders'>
                        <InfoOrders/>
                        <InfoOrders/>
                        <InfoOrders/>
                        <InfoOrders/>
                        <h1 className='price'>Total: R$ 200,00</h1>
                    </div>
                </Request>
                <Payment>
                    <h1>Pagamento</h1>
                </Payment>
            </Orders>
            <Footer/>
        </Container>
    )
}