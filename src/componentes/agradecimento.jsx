import React, {useState} from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import '../assets/css/App.css'

export default function Agradecimentos(props) {
    return (
        <Container component="article" maxWidth="sm">
        <Typography variant="h3" align='center'>Obrigado por fazer o cadastro</Typography>
        <p className="agradecimentos__paragrafo">Suas compras chegarão em breve!</p>
        <div className="botoes">
            <Button
                type="submit"
                variant="contained"
                color="primary"
                margin="dense"
                onClick={props.voltar}
                >Voltar ao inicio</Button>
        </div>
        </Container>
        
    );
}