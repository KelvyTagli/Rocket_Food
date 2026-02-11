import { Container, Description, Ingredients } from "./styles";
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { CaretLeft } from "@phosphor-icons/react";
import Maracuja from '../../assets/maracuja.png';
import { Tag } from '../../Components/Tag';
import { Counter } from "../../Components/Counter";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../Services/api";

export function Dish() {
    const params = useParams();
    const [data, setData] = useState(null);
    const [quantity, setQuantity] = useState(1); 

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dish/${params.id}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching dish data:", error);
            }
        }
        fetchDish();
    }, [params.id]);

    function handleInclude() {
        const dishPhoto = data?.photo ? `${api.defaults.baseURL}/photoFiles/${data.photo}` : Maracuja;
        
        const cartItem = {
            id: data.id,
            title: data.title,
            price: data.price,
            quantity: quantity,
            cover: dishPhoto
        };

        const storageItems = JSON.parse(localStorage.getItem('@rocketfood:Produtos')) || [];
        
        const itemExists = storageItems.find(item => item.id === cartItem.id);

        if (itemExists) {
            itemExists.quantity += quantity;
        } else {
            storageItems.push(cartItem);
        }

        localStorage.setItem('@rocketfood:Produtos', JSON.stringify(storageItems));
        alert("Produto adicionado ao carrinho!");
    }

    const dishphoto = data?.photo ? `${api.defaults.baseURL}/photoFiles/${data.photo}` : Maracuja;
    
    return (
        <Container>
            <Header />
            <Link to="/Rocket_Food/" className="Button_Back">
                <CaretLeft size={30} />Voltar
            </Link>
            {data && (
                <Description>
                    <img src={dishphoto} alt={data.title} />
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        {data.tags && (
                            <Ingredients>
                                {data.tags.map(tag => (
                                    <Tag
                                        key={String(tag.id)}
                                        title={tag.name}
                                    />
                                ))}
                            </Ingredients>
                        )}
                        
                        <Counter 
                            title={data.price} 
                            setQuantity={setQuantity} 
                            quantity={quantity}
                            onInclude={handleInclude} 
                        />
                    </div>
                </Description>
            )}
            <Footer />
        </Container>
    );
}
