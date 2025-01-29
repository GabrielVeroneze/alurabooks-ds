import React from 'react'
import { CampoWrapper, Input, Label } from './styled'

export interface AbCampoTextoProps {
    id: string
    label: string
    type?: 'text' | 'email' | 'password' | 'date'
    placeholder?: string
    value: string
    onChange: (value: string) => void
}

export const AbCampoTexto = ({
    id,
    label,
    type = 'text',
    placeholder,
    value,
    onChange
}: AbCampoTextoProps) => {
    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        onChange(evento.target.value)
    }

    return (
        <CampoWrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </CampoWrapper>
    )
}
