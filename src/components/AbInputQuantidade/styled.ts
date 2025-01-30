import styled from 'styled-components'

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 165px;
`

export const Label = styled.label`
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
`

export const ControlesWrapper = styled.div`
    display: flex;
    gap: 12px;
`

export const Botao = styled.button`
    align-items: center;
    background: #002f52;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 0px #00000040;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-size: 24px;
    height: 28px;
    justify-content: center;
    padding: 0;
    width: 28px;
`

export const Span = styled.span`
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    background-clip: text;
    color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 400;
    height: 28px;
    line-height: 28px;
    min-width: 28px;
    text-align: center;
`
