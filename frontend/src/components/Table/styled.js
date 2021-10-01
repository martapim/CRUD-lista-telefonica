import styled from 'styled-components'

export const TabelaContato = styled.div`
      @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
      font-family: "Roboto", sans-serif;
      color: #555358;
      background-color: #d6d2d2;
      display: inline;
      float: right;
      width:76%;
      margin-top: 100px;
     
        .cabecalho{
          background-color: #c6f91f;
          justify-content: space-around; 
          height: 60px;
        }

        td{
          padding:20px;
        }
        .editar{
          padding:10px;
          border-radius:5px;
          border: none;
          outline:none;
          color: #555358;
        }
        .excluir{
          padding:10px;
          border-radius:5px;
          border: none;
          outline:none;
          color: white;
          background-color: #ff3a20;
        }
        
   `;

