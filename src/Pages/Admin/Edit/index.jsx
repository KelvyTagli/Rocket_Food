import { Container,Edit_Form, } from './style'
import { Admin_Header } from '../../../Components/admin_Header'
import { CaretLeftIcon, UploadSimpleIcon } from '@phosphor-icons/react'
import { Footer } from '../../../Components/Footer';

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../Services/api";


export function Edit() {

    const params = useParams();
    const [data, setData] = useState(null);

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
        
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

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
     }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tags => tags !== deleted))
     }

    return(
        <Container>
            <Admin_Header/>
            <Link to={`/Rocket_Food/Dish/${params.id}`} className="Button_Back">
                <CaretLeftIcon size={30}/> Voltar
            </Link>
            {data && (
                <Edit_Form>
                    <h3>Editar pratos</h3>

                    <div className='Principal'>
                        <div className='img'>
                            <label>imagem do prato</label>
                            <button>
                                <UploadSimpleIcon size={24}/>
                                Selecione imagem
                            </button>
                        </div>

                        <div className='name'>
                            <label>Nome</label>
                            <input type="text" placeholder={`${data.title}`} />
                        </div>

                        <div className='category'>
                            <label>Categoria</label>
                            <select className='select'>
                                <option value="Refeicoes">Refeições</option>
                                <option value="sobremesas">Sobremesas</option>
                                <option value="bebidas">Bebidas</option>
                            </select>
                        </div>
                    </div>

                    <div className='ingredientes_preco'>
                        <div className='tags'>
                             <label>Ingredientes</label>
                        </div>
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