import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

export default function FormularioCadastro( { enviarForm, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if(etapaAtual === formularios.length -1) {
            enviarForm(dadosColetados);
        }
    });

    const formularios =[
        <DadosUsuario aoEnviar={coletarDados} />, 
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Cadastro realizado com sucesso! 🥳</Typography>
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual+1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>);
}

