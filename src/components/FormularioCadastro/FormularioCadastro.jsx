import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth />
            
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth />
           
            <TextField id="cpf" label="CPF" type="text" variant="outlined" fullWidth />
           
            <label>Promoções</label>
            <input type="checkbox"/>
           
            <label>Novidades</label>
            <input type="checkbox"/>

            <Button variant="contained" color="primary" type='submit'>Cadastrar</Button>
        </form>
    )
}