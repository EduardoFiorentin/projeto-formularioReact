import React, {useState} from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import '../assets/css/App.css'

export default function DadosPessoais(props) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [erros, setErros] = useState({cpf: {valido: true, texto: ''}})


    return(
        <Container 
        component="form" 
        maxWidth="sm"
        onSubmit={event => {
            event.preventDefault()
            if (erros.cpf.valido) {
                props.enviarDados({nome, sobrenome, cpf})
                props.proxima()
            }}}>

            <Typography variant="h3" align='center'>Dados Pessoais</Typography>
            <TextField 
                onChange={event => {
                    setNome(event.target.value)
                    // console.log(email)
                }}
                value = {nome}
                id="nome" 
                label="Nome" 
                type="text" 
                variant="outlined" 
                fullWidth
                margin='normal'
                />
            <TextField 
                 onChange={event => {
                    setSobrenome(event.target.value)
                    // console.log(email)
                }}
                value = {sobrenome}
                id="sobrenome" 
                label="Sobrenome" 
                type="text" 
                variant="outlined" 
                fullWidth
                margin='normal'
                />
            <TextField 
                 onChange={event => {
                    setCpf(event.target.value)
                    // console.log(email)
                }}

                onBlur={(event)=>{
                    console.log('blur')
                    validarCpf(event, erros, setErros)
                    setCpf(event.target.value)
                    console.log(erros)}
                }
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                required

                value = {cpf}
                id="cpf" 
                label="CPF" 
                type="text" 
                variant="outlined" 
                fullWidth
                margin='normal'
                />

            <div className="botoes">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={props.voltar}
                    margin="dense"
                    >Voltar</Button>

                <div className='espaco'></div>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    margin="dense"
                    >Proximo</Button>
            </div>
        </Container> 
    );
}


function validarCpf(event, erros, setErros) {
    let novoCpf = event.target.value
    let errosCpf = erros
    console.log(novoCpf);
    novoCpf = novoCpf.split(/[.-]/g)
    novoCpf = novoCpf.join('')
    console.log(novoCpf);

    if (novoCpf.length == 11) {
        console.log('definindo como true')
        errosCpf.cpf.valido = true
        errosCpf.cpf.texto = ""
        setErros(errosCpf);
        console.log('foi')
    } else {
        console.log('definindo como false')
        errosCpf.cpf.valido = false
        errosCpf.cpf.texto = "CPF deve ter 11 números"
        setErros(errosCpf);
        console.log('foi')
    }
}
