import styled, { css } from 'styled-components'
import { AbBotaoProps } from './'

export const Botao = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#eb9b00' : '#ffffff'};
    border: 2px solid #eb9b00;
    color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#ffffff' : '#eb9b00'};
    cursor: pointer;
    font-size: 20px;
    padding: 16px 32px;

    ${(props: AbBotaoProps) => props.tipo === 'primario'
        ? css`
            &:hover {
                background: #b87900;
                border: 2px solid #b87900;
            }
        `
        : css`
            &:hover {
                color: #b87900;
                background: #ffffff;
                border: 2px solid #b87900;
            }
        `
    };
`
