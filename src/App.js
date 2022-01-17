
import React, { Component } from 'react';
import "fontsource-roboto";

import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro enviarForm={enviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function enviarForm(dados) {
  console.log(dados);
}


function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto:"Digite um CPF válido"}
  } else {
    return {valido:true, texto:""}
  }
}
export default App;
