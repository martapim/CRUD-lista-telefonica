import React from 'react';
import { TabelaContato  } from './styled';



const Table = props => {
  return (
    <TabelaContato>
    <table>
      <thead>
        <tr className="cabecalho">
          <th>Nome: </th>
          <th>Telefone:</th>
          <th>Celular:</th>
          <th>E-mail:</th>
          <th>Endereço:</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {props.contacts.map(contact => (
            <tr>
            <td>{contact.nome}</td>
            <td>{contact.telefone}</td>
            <td>{contact.celular}</td>
            <td>{contact.email}</td>
            <td>{contact.endereco}</td>
            <td><button onClick={() => props.editContact(contact)}  className="editar">Editar</button> </td>
            <td><button onClick={() => props.deleteContact(contact)} className="excluir">Excluir</button> </td>
          </tr>
          ))}
          </tbody>
          
      
      </table>
    </TabelaContato>
  )
}

export default Table;