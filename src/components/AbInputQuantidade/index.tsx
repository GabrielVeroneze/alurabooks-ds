import React, { useEffect, useState } from 'react'
import { Botao, Span, ControlesWrapper, Wrapper, Label } from './styled'

export interface AbInputQuantidadeProps {
    onChange?: (value: number) => void
}

export const AbInputQuantidade = ({ onChange }: AbInputQuantidadeProps) => {
    const [value, setValue] = useState<number>(1)

    useEffect(() => {
        if (onChange) {
            onChange(value)
        }
    }, [value])

    return (
        <Wrapper>
            <Label>Quantidade</Label>
            <ControlesWrapper>
                <Botao onClick={() => setValue(prev => prev - 1)}>-</Botao>
                <Span>{String(value).padStart(2, '0')}</Span>
                <Botao onClick={() => setValue(prev => prev + 1)}>+</Botao>
            </ControlesWrapper>
        </Wrapper>
    )
}
