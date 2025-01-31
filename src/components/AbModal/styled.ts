import styled from 'styled-components'

export const Janela = styled.div`
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    left: 50%;
    padding: 64px;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const Fundo = styled.div`
    background: rgba(101, 101, 101, 0.85);
    bottom: 0px;
    left: 0px;
    position: fixed;
    right: 0px;
    top: 0px;
`

export const TituloWrapper = styled.div`
    align-items: center;
    display: flex;
    font-family: sans-serif;
    justify-content: space-between;
`

export const Titulo = styled.h2`
    color: #eb9b00;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    margin: 0;
`

export const BotaoFechar = styled.button`
    background: transparent;
    border: none;
    color: #002f52;
    cursor: pointer;
`
