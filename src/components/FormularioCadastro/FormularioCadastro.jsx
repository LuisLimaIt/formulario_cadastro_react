import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

export default function FormularioCadastro( { enviarForm, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    function proximo() {
        setEtapaAtual(etapaAtual+1);
    }

    function formularioAtual(etapa) {
        switch(etapa) {
            case 0:
                return <DadosUsuario aoEnviar={proximo} />;
            case 1:
                return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
            case 2:
                return <DadosEntrega enviarForm={enviarForm} />;
            default:
                return <Typography>Erro ao selecionar formulário</Typography>
        }
    }

    return (
        <>
            {formularioAtual(etapaAtual) }
        </>
    );
}

