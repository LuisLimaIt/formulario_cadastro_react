import { Button, TextField } from '@material-ui/core';
import React from 'react';

export default function DadosUsuario({ aoEnviar }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            aoEnviar();
        }}>
            <TextField 
                id="email" 
                label="email" 
                type="email" 
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField 
                id="senha" 
                label="senha" 
                type="password" 
                required
                variant="outlined"
                margin="normal"
                fullWidth    
            />
            <Button 
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    );
}