import React, {useState} from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import '../assets/css/App.css'

export default function Endereco(props) {
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')


    return(
        <Container component="form" maxWidth="sm">
            <Typography variant="h3" align='center'>Endereço</Typography>
            
            <TextField 
                onChange={event => {
                    setCep(event.target.value)
                    // console.log(email)
                }}
                value = {cep}
                id="cep" 
                label="CEP" 
                type="text" 
                variant="outlined" 
                fullWidth
                margin='normal'
                required/>
            <div className="campos-pequenos">
                <TextField
                    onChange={event => {
                        setCidade(event.target.value)
                        // console.log(email)
                    }}
                    value = {cidade}
                    className="campo-pequeno"
                    id="cidade"
                    label="Cidade"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin='normal'
                    required/>

                <div className="espaco"></div>

                <div className="estado">
                    <TextField
                        onChange={event => {
                            setEstado(event.target.value)
                            // console.log(email)
                        }}
                        value = {estado}
                        className="campo-pequeno"
                        id="estado"
                        label="UF"
                        type="text"
                        variant="outlined"
                        fullWidth
                        margin='normal'
                        required/>
                </div>
            </div>
            
            <TextField 
                onChange={event => {
                    setBairro(event.target.value)
                    // console.log(email)
                }}
                value = {bairro}
                id="bairro" 
                label="Bairro" 
                type="text" 
                variant="outlined" 
                fullWidth
                margin='normal'
                required/>
            <div className="campos-pequenos">
                <TextField
                    onChange={event => {
                        setRua(event.target.value)
                        // console.log(email)
                    }}
                    value = {rua}
                    id="rua"
                    label="Rua"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin='normal'
                    required/>
                <div className="espaco"></div>
                <div className="numero">
                    <TextField
                        onChange={event => {
                            setNumero(event.target.value)
                            // console.log(email)
                        }}
                        value = {numero}
                        id="numero"
                        label="Numero"
                        type="number"
                        variant="outlined"
                        fullWidth
                        margin='normal'/>
                </div>
            </div>
            

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
                    onClick={event => {
                        event.preventDefault()
                        props.enviarDados({cep, cidade, estado, bairro, rua, numero})
                        props.proxima()
                    }}
                    >Proximo</Button>
            </div>
        </Container> 
    );
}