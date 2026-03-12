import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaretLeftIcon, UploadSimpleIcon } from '@phosphor-icons/react';

import { Container, New_Form } from './style';

import { Admin_Header } from '../../../Components/Components_ADMIN/admin_Header';
import { NoteItem } from '../../../Components/Components_ADMIN/admin_Tag';
import { Footer } from '../../../Components/Footer';
import { api } from "../../../Services/api";

export function New() {
    
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(""); 
    const [price, setPrice] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [imageFile, setImageFile] = useState(null);

    function handleChangeImage(event) {
        const file = event.target.files[0];
        setImageFile(file);
    }

    function handleAddTag() {
        if (!newTag) return;
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNew() {
        if (!imageFile) return alert("Selecione a imagem do prato!");
        if (!title || !category || !description || !price) return alert("Preencha todos os campos!");
        if (newTag) return alert("Você deixou uma tag no campo de adicionar, mas não clicou em +.");

        const formData = new FormData();
        formData.append("photo", imageFile);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        
        tags.forEach(tag => {
            formData.append("tags", tag);
        });

        try {
            
            await api.post("/dish", formData);
            
            alert("Prato cadastrado com sucesso!");
            navigate(-1);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro 500: O servidor falhou. Verifique se o Multer está configurado no Back-end.");
            }
        }
}

    return (
        <Container>
            <Admin_Header />
            <button onClick={() => navigate(-1)} className="Button_Back">
                <CaretLeftIcon size={30} /> Voltar
            </button>

            <New_Form>
                <h2>Adicionar prato</h2>

                <div className='Principal'>
                    <div className='img'>
                        <label htmlFor="image">Imagem do prato</label>
                        <label className='image-upload-label' htmlFor="image" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <UploadSimpleIcon size={24} />
                            <span>{ "Selecione imagem"}</span>
                            
                            <input 
                                id="image" 
                                type="file" 
                                accept="image/*"
                                onChange={handleChangeImage}
                                style={{ display: 'none' }} 
                            />
                        </label>
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
                            value={category} 
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="">Selecione...</option>
                            <option value="Refeições">Refeições</option>
                            <option value="Sobremesas">Sobremesas</option>
                            <option value="Bebidas">Bebidas</option>
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
                            value={price} 
                            placeholder="R$ 00,00"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                <div className='descricao'>
                    <label>Descrição</label>
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Fale brevemente sobre o prato"
                    />
                </div>

                <div className="actions">
                    <button type="button" onClick={handleNew}>Salvar alterações</button>
                </div>
            </New_Form>
            <Footer />
        </Container>
    );
}