import React, { useState } from 'react';
import DadosPessoais from './dadosPessoais';
import DadosUsuario from './dadosUsuario';

export default function FormularioCadastro( { enviarForm, validarCPF }) {

    return (
        <>
            <DadosPessoais enviarForm={enviarForm} validarCPF={validarCPF} />
            <DadosUsuario />
        </>
    );
}