import React, {useState, useEffect} from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

export default function ConfirmarLogin(props) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [erros, setErros] = useState({email: {valido: true, texto: ''}, 
                                        senha: {valido: true, texto: ''}})

    return (
        <Container 
        component="form" 
        maxWidth="sm"
        onSubmit={event => {
            event.preventDefault()
            if (erros.email.valido && erros.senha.valido) {
                props.enviarDados({email, senha})
                props.proxima()
            }
        }}>
            <Typography variant="h3" align='center'>Confirme seu LogIn</Typography>
            <TextField 
                onChange={event => {
                    setEmail(event.target.value)
                }}

                onBlur={(event)=>{
                    console.log('blur')
                    validarEmail(event, erros, setErros)
                    setEmail(event.target.value)
                    console.log(erros)}
                }
                error={!erros.email.valido}
                helperText={erros.email.texto}
                required

                value = {email}
                id="email" 
                label="Email" 
                type="text" 
                variant="outlined" 
                fullWidth 
                margin='normal'
                />
            <TextField 
                onChange={event => {
                    setSenha(event.target.value)
                }}

                onBlur={(event)=>{
                    console.log('blur')
                    validarSenha(event, erros, setErros)
                    console.log(erros)
                }
                }
                error={!erros.senha.valido}         //problema: só atualiza isso aq quando 
                helperText={erros.senha.texto}      // 
                required

                value = {senha}
                id="senha" 
                label="senha" 
                type="password" 
                variant="outlined" 
                fullWidth 
                margin='normal'
                />
            <div className="botoes">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    >Proximo</Button>
            </div>
        </Container>         
    );
}


function validarEmail(event, erros, setErros) {
    const email = event.target.value
    let errosEmail = erros
    const reg = /\S+@\S+\.\S+/;

    if (reg.test(email)) {
        console.log('definindo como true')
        errosEmail.email.valido = true
        errosEmail.email.texto = ""
        setErros(errosEmail);
        console.log('foi')
    } else {
        console.log('definindo como false')
        errosEmail.email.valido = false
        errosEmail.email.texto = "Email inválido!"
        setErros(errosEmail);
        console.log('foi')

    }
}

function validarSenha(event, erros, setErros) {
    const senha = event.target.value
    let errosSenha = erros

    if (senha.length >= 4) {
        console.log('definindo como true')
        errosSenha.senha.valido = true
        errosSenha.senha.texto = ""
        setErros(errosSenha);
        console.log('foi')
    } else {
        console.log('definindo como false')
        errosSenha.senha.valido = false
        errosSenha.senha.texto = "Senha deve ter pelo menos 4 digitos"
        setErros(errosSenha);
        console.log('foi')

    }
}
