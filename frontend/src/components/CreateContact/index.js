import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import { AreaForm } from './styled'
import { MdPhoneIphone, MdPhone  } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs"

const CreateContact = ({ contact: contactProps }) => {
    const [contact, setContact] = useState(contactProps)
    const [showCancel, setShowCancel] = useState(false)
    
    useEffect(() => {
        setContact(contactProps)
        setShowCancel(!!Object.keys(contactProps).length)
    }, [contactProps])

    const onChangeContact = (event) => {
        const input = event.target

        setContact(prevState => ({
            ...prevState,
            [input.name]: input.value
        }))
    }

    const onSubmit = useCallback((event) => {
        event.preventDefault()

        if(showCancel) {
            axios.put(`http://localhost:3001/${contact._id}`, contact)
            .then(response => console.log('response', response.data))
        } else {
            axios.post('http://localhost:3001/', contact)
            .then(response => console.log('response', response.data))
        }

       window.location.assign('/')
    }, [contact, showCancel])

    return (
        <AreaForm>
            <form onSubmit={onSubmit}>
                <div className="campo"> 
                    <BsPerson /> Nome: <input type="text" name="nome" className="form" placeholder="Nome" onChange={onChangeContact} value={contact?.nome} />
                    <MdPhone /> Telefone: <input type="tel" maxlength="10" pattern="[0-9]+" name="telefone" className="form" placeholder="Telefone fixo" onChange={onChangeContact} value={contact?.telefone} />
                    <MdPhoneIphone />Celular: <input type="tel" maxlength="10" pattern="[0-9]+" name="celular" className="form" placeholder="Celular" onChange={onChangeContact} value={contact?.celular} /> 
                    <HiOutlineMail /> E-mail: <input type="email" name="email" className="form" placeholder="Email" onChange={onChangeContact} value={contact?.email}  /> 
                    <AiOutlineHome />Endereço: <input type="text" name="endereco" className="form" placeholder="Endereço" onChange={onChangeContact} value={contact?.endereco}  /> 

                    <input type="submit" className="clicar"/> 

                    {showCancel && (
                        <button type="button" className="clicar" onClick={() => {
                            contactProps = {}
                            setShowCancel(false)
                        }}>Cancelar</button>
                    )} 
                </div>
            </form>
        </AreaForm>
    );
}

export default CreateContact;