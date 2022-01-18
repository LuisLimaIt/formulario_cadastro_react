import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

export default function FormularioCadastro( { enviarForm, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    const formularios =[
        <DadosUsuario aoEnviar={proximo} />, 
        <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
        <DadosEntrega enviarForm={enviarForm} />
    ];

    function proximo() {
        setEtapaAtual(etapaAtual+1);
    }

    return <>{formularios[etapaAtual]}</>;
}

