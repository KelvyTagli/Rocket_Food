import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CaretLeftIcon, UploadSimpleIcon } from '@phosphor-icons/react';

import { api } from "../../../Services/api";
import { Container, Edit_Form } from './style';

import { Admin_Header } from '../../../Components/Components_ADMIN/admin_Header';
import { NoteItem } from '../../../Components/Components_ADMIN/admin_Tag';
import { Footer } from '../../../Components/Footer';

export function Edit() {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dish/${params.id}`);
                const { title, description, category, price, tags } = response.data;
                
                setTitle(title);
                setDescription(description);
                setCategory(category && category.length > 0 ? category[0] : "");
                setPrice(price);
                setTags(tags.map(t => t.name)); 
            } catch (error) {
                console.error("Erro ao carregar prato:", error);
                alert("Não foi possível carregar os dados do prato.");
            } finally {
                setLoading(false);
            }
        }
        fetchDish();
    }, [params.id]);


    function handleAddTag() {
        if (!newTag) return;
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleUpdateDish() {
        if (!title || !category || !price || !description) {
            return alert("Preencha todos os campos!");
        }

        // 1. Criamos o objeto FormData
        const formData = new FormData();

        // 2. Adicionamos os campos de texto
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", String(price).replace("R$ ", ""));

        // 3. Adicionamos as tags (enviamos como string JSON para o backend tratar)
        formData.append("tags", JSON.stringify(tags));

        // 4. Se houver uma nova foto selecionada, adicionamos ela
        if (imageFile) {
            formData.append("photo", imageFile);
        }

        try {
            setLoading(true);
            // Enviamos o formData no lugar do objeto comum
            await api.put(`/dish/${params.id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            alert("Prato atualizado com sucesso!");
            navigate(-1);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar.");
            }
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <Container>Carregando...</Container>;

    return (
        <Container>
            <Admin_Header />
            
            <Link to={-1} className="Button_Back">
                <CaretLeftIcon size={30} /> Voltar
            </Link>

            <Edit_Form>
                <h3>Editar prato</h3>

                <div className='Principal'>
                    <div className='img'>
                        <label htmlFor="image">Imagem do prato</label>
                        <button type="button">
                            <UploadSimpleIcon size={24} />
                            Selecione imagem
                        </button>
                    </div>

                    <div className='name'>
                        <label>Nome</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>

                    <div className='category'>
                        <label>Categoria</label>
                        <select 
                            className='select' 
                            value={category.category} 
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="">{category.category}</option>
                            <option value="refeicoes">Refeições</option>
                            <option value="sobremesas">Sobremesas</option>
                            <option value="bebidas">Bebidas</option>
                        </select>
                    </div>
                </div>

                <div className='ingredientes_preco'>
                        <label>Ingredientes</label>
                    <div className='tags'>
                        {tags.map((tag, index) => (
                            <NoteItem
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                            />
                        ))}
                        
                        <NoteItem
                            isNew
                            placeholder="Adicionar"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>
                    <div className="price">
                        <label>Preço</label>
                        <input 
                            type="text" 
                            value={`${price}`} 
                            placeholder="R$"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                <div className='descricao'>
                    <label>Descrição</label>
                    <div className="description">
                        <textarea 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Fale brevemente sobre o prato"
                        />
                    </div>
                </div>

                <div className="actions">
                    <button type="button" className="delete">Excluir prato</button>
                    <button type="button" onClick={handleUpdateDish}>Salvar alterações</button>
                </div>
            </Edit_Form>

            <Footer />
        </Container>
    );
}