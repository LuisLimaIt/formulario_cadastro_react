import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function FormularioCadastro() {
    let nome = "";
    return (
        <form onSubmit={(e) => { 
            e.preventDefault();
            console.log(nome); 
        }}>
            <TextField
                value={nome}
                onChange={e => {
                    nome = e.target.value;
                    if(nome.length > 3) {
                        nome = nome.substr(0,3);
                    }
                }}
                margin="normal"
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
            />

            <TextField
                margin="normal"
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
            />

            <TextField
                margin="normal"
                id="cpf"
                label="CPF"
                type="text"
                variant="outlined"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" defaultChecked color="primary"
                />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades" defaultChecked color="primary"
                />}
            />

            <Button variant="contained" color="primary" type='submit'>Cadastrar</Button>
        </form>
    )
}