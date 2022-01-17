import React, { useState } from 'react';
import DadosEntrega from './dadosEntrega';
import DadosPessoais from './dadosPessoais';
import DadosUsuario from './dadosUsuario';

export default function FormularioCadastro( { enviarForm, validarCPF }) {

    return (
        <>
            <DadosPessoais enviarForm={enviarForm} validarCPF={validarCPF} />
            <DadosUsuario />
            <DadosEntrega />
        </>
    );
}