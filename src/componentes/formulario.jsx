import React, {useState, useEffect} from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import ConfirmarLogin from './confirmarLogin';
import DadosPessoais from './DadosPessoais';
import Endereco from './Endereco';
import Finalizacao from './finalizacao';
import Agradecimentos from './agradecimento';



export default function Formulario () {
    const [paginaAtual, novaPagina] = useState(0)
    const [dados, setDados] = useState({})
    

    useEffect(()=>{
        // console.log("dados", dados)
    })

    function cadastrarDados(novosDados) {
        setDados({...dados, ...novosDados})
        
    }

    const paginas = [
        <ConfirmarLogin proxima={proxima} enviarDados = {cadastrarDados}/>,
        <DadosPessoais proxima={proxima} voltar={voltar} enviarDados = {cadastrarDados}/>,
        <Endereco proxima={proxima} voltar={voltar} enviarDados = {cadastrarDados}/>,
        <Finalizacao proxima={proxima} voltar={voltarAoInicio} dados={dados}/>,
        <Agradecimentos voltar={voltarAoInicio}/>
    ]

    function proxima() {
        novaPagina(paginaAtual + 1)
        
    }
    function voltar() {
        novaPagina(paginaAtual - 1)
    }
    function voltarAoInicio() {
        novaPagina(0)
    }

    return(
        <Container maxWidth="sm">
        <Stepper activeStep={paginaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {paginas[paginaAtual]}
        </Container>
    )
}