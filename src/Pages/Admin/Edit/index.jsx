import { Container,Edit_Form, } from './style'
import { Admin_Header } from '../../../Components/admin_Header'
import { CaretLeftIcon } from '@phosphor-icons/react'
import { Footer } from '../../../Components/Footer';

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../Services/api";
import { Button } from '../../../Components/Button';

export function Edit() {

    const params = useParams();
    const [data, setData] = useState(null);
        
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

    return(
        <Container>
            <Admin_Header/>
            <Link to={`/Rocket_Food/Dish/${params.id}`} className="Button_Back">
                <CaretLeftIcon size={30}/> Voltar
            </Link>
            {data && (
                <Edit_Form>
                    <h2>Editar pratos</h2>

                    <div className='Principal'>
                        <div>
                            <h4>imagem do prato</h4>
                            <input type="file" />
                        </div>

                        <div className='name'>
                            <h4>Nome</h4>
                            <input type="text" placeholder={`${data.title}`} />
                        </div>

                        <div>
                            <h4>Categoria</h4>
                            <input type="text" placeholder="" />
                        </div>
                    </div>

                    <div className='tags'>

                    </div>

                    <div className='descricao'>

                    </div>
                    <button>salvar</button>
                    <button>remover</button>
                </Edit_Form>
            )}
            <Footer/>
        </Container>
    )
}