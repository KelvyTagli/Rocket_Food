import { Container, Description, Ingredients } from "./style";
import { Admin_Header } from "../../../Components/Components_ADMIN/admin_Header";
import { Footer } from "../../../Components/Footer";
import { Tag } from '../../../Components/Tag';
import Maracuja from '../../../assets/maracuja.png';

import { CaretLeft } from "@phosphor-icons/react";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../Services/api";


export function Dish_admin() {

        const params = useParams();
        const [data, setData] = useState(null);

        const navigate = useNavigate()

        function handleBack() {
            navigate(-1);
        }

        function handlerEdit() {
            const id = params.id 
            navigate(`/Rocket_Food/Edit/${id}`)
        }
    
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
    
        const dishphoto = data?.photo ? `${api.defaults.baseURL}/photoFiles/${data.photo}` : Maracuja;
        
        return (
            <Container>
                <Admin_Header />
                <Link onClick={handleBack} className="Button_Back">
                    <CaretLeft size={30} />Voltar
                </Link>
                {data && (
                    <Description>
                        <img src={dishphoto} alt={data.title} />
                        <div>
                            <label className="title">{data.title}</label>
                            <label>{data.description}</label>
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
                            <div className="edit">
                                <button  onClick={handlerEdit}>
                                    Editar Prato
                                </button>
                            </div>
                        </div>
                    </Description>
                )}
                <Footer />
            </Container>
        );
}