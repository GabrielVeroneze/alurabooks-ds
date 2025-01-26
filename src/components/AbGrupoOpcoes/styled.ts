import styled from 'styled-components'

export const Opcao = styled.section<{ selecionado: boolean }>`
    align-items: center;
    background: ${({ selecionado }) => selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#ffffff'};
    border: 1px solid;
    border-color: ${({ selecionado }) => selecionado ? '#002F52' : '#eb9b00'};
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    justify-content: space-evenly;
    min-height: 88px;
    width: 194px;
`

export const Header = styled.header<{ selecionado: boolean }>`
    color: ${({ selecionado }) => selecionado ? '#FFFFFF' : '#eb9b00'};
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
`

export const Preco = styled.div<{ selecionado: boolean }>`
    color: ${({ selecionado }) => selecionado ? '#FFFFFF' : '#eb9b00'};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
`

export const Formatos = styled.footer<{ selecionado: boolean }>`
    color: ${({ selecionado }) => selecionado ? '#FFFFFF' : '#0000008a'};
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
`
