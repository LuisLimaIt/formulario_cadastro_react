import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function FormularioCadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    return (
        <form onSubmit={(e) => { 
            e.preventDefault();
            console.log(nome, sobrenome); 
        }}>
            <TextField
                value={nome}
                onChange={(e) => {
                    let tmpNome = e.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0,3);
                    }
                    setNome(tmpNome);
                }}
                margin="normal"
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(e) => {
                    setSobrenome(e.target.value);
                }}
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