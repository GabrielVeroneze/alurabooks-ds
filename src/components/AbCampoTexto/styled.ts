import styled from 'styled-components'

export const CampoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 509px;
`

export const Label = styled.label`
    color: #002f52;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-left: 24px;
`

export const Input = styled.input`
    border: 1px solid #002f52;
    border-radius: 24px;
    box-sizing: border-box;
    color: #002f52;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 44px;
    line-height: 24px;
    padding: 10px 24px;
    width: 100%;

    &::placeholder {
        color: #a4a4a4;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }

    &:focus {
        outline: none;
    }
`
