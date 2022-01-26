import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

export default function DadosPessoais( { aoEnviar }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    
    const [erros, setErros] = useState({ cpf:{ valido:true, texto:"" }, nome:{ valido:true, texto:"" } });

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(e) {   
        const { name, value } = e.target;
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
    }

    function possoEnviar() {
        for(let campo in erros) {
            if(!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return (
        <form onSubmit={(e) => { 
            e.preventDefault();
            if(possoEnviar()) {
                aoEnviar({nome, sobrenome, cpf, promocoes,novidades})
            }
        }}>
            <TextField
                value={nome}
                onChange={(e) => {
                    setNome(e.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                margin="normal"
                id="nome"
                name="nome"
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
                name="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                margin="normal"
                id="cpf"
                name="cpf"
                label="CPF"
                type="text"
                variant="outlined"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch 
                        checked={promocoes}
                        onChange={e => 
                            setPromocoes(e.target.checked)
                        }
                        name="promocoes" 
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch 
                        checked={novidades}
                        onChange={e => 
                            setNovidades(e.target.checked)
                        }
                        name="novidades" 
                        color="primary"
                    />
                }
            />

            <Button variant="contained" color="primary" type='submit'>Próximo</Button>
        </form>
    );
}