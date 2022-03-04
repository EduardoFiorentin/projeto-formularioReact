import React, {useState} from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import '../assets/css/App.css'

export default function Finalizacao(props) {
    return(
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align='center'>Confira seus dados</Typography>

            <h4 className="dados">Dados Pessoais</h4>
            <p className="dados-pessoais">
                <p><strong>Email:</strong> {props.dados.email}</p>
                <p><strong>Nome:</strong> {props.dados.nome + " " + props.dados.sobrenome}</p>
                <p><strong>CPF:</strong> {props.dados.cpf}</p>
            </p>

            <h4 className="dados">Endereço</h4>
            <p className="dados-pessoais">
                <p><strong>Cidade:</strong> {props.dados.cidade + ', ' + props.dados.estado}</p>
                <p><strong>Bairro:</strong> {props.dados.bairro}</p>
                <p><strong>Rua:</strong> {props.dados.rua + ", " + props.dados.numero}</p>
            </p>
            
            <div className="botoes">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={props.voltar}
                    margin="dense"
                    >Preencher novamente</Button>

                <div className='espaco'></div>
                
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    margin="dense"
                    onClick={props.proxima}
                    >Confirmar</Button>
            </div>
        </Container>
    );
}