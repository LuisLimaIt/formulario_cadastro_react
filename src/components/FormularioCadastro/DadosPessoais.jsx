import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function DadosPessoais( { enviarForm, validarCPF }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, text:""}});

    return (
        <form onSubmit={(e) => { 
            e.preventDefault();
            enviarForm({nome, sobrenome, cpf, promocoes,novidades})
        }}>
            <TextField
                value={nome}
                onChange={(e) => {
                    setNome(e.target.value);
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
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value);
                }}
                onBlur={(e) => {
                    const cpfValido = validarCPF(cpf);
                    setErros({cpf:cpfValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                margin="normal"
                id="cpf"
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

            <Button variant="contained" color="primary" type='submit'>Cadastrar</Button>
        </form>
    );
}