import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function FormularioCadastro() {
    return (
        <form>
            <TextField margin="normal" id="nome" label="Nome" variant="outlined" fullWidth />
            
            <TextField margin="normal" id="sobrenome" label="Sobrenome" variant="outlined" fullWidth />
           
            <TextField margin="normal" id="cpf" label="CPF" type="text" variant="outlined" fullWidth />
           
            <label>Promoções</label>
            <input type="checkbox"/>
           
            <label>Novidades</label>
            <input type="checkbox"/>

            <Button variant="contained" color="primary" type='submit'>Cadastrar</Button>
        </form>
    )
}