import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

export default function DadosUsuario({ aoEnviar }) {
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if(possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField  
                value={email}
                onChange={e =>  setEmail(e.target.value)}
                id="email" 
                name="email" 
                label="email" 
                type="email" 
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField 
                value={senha}
                onChange={(e) => { setSenha(e.target.value) }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                name="senha" 
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
                Próximo
            </Button>
        </form>
    );
}